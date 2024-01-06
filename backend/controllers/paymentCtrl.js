import Reviews from '../models/reviewModel.js'
import Estates from '../models/estateModel.js'
import Payments from '../models/paymentModel.js'

const paymentCtrl = {
    createPayment: async (req, res) => {
        try {
            const { estateId, type, checkIn, checkOut, price, discount, paymentMethod, estateUserId } = req.body

            const estate = await Estates.findById(estateId)
            if (!estate) return res.status(400).json({ msg: "This estate does not exist." })

            const newPayment = new Payments({
                user: req.user._id, type, checkIn, checkOut, price, discount, paymentMethod, estateUserId, estateId
            })

            await Estates.findOneAndUpdate({ _id: estateId }, {
                $push: { payments: newReview._id }
            }, { new: true })

            await newPayment.save()

            res.json({ newPayment })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}


export default paymentCtrl