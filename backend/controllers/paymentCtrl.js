import Reviews from '../models/reviewModel.js'
import Estates from '../models/estateModel.js'
import Payments from '../models/paymentModel.js'
class APIfeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    paginating() {
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}
const paymentCtrl = {
    createPayment: async (req, res) => {
        try {
            const { estateId, type, checkIn, checkOut, price, note, discount, paymentMethod, estateUserId } = req.body

            const estate = await Estates.findById(estateId)
            if (!estate) return res.status(400).json({ msg: "This estate does not exist." })

            const newPayment = new Payments({
                user: req.user._id, type, checkIn, checkOut, price, note, discount, status: '1', paymentMethod, estateUserId, estateId
            })
            await Estates.findOneAndUpdate({ _id: estateId }, {
                $push: { payments: newPayment._id }
            }, { new: true })

            await newPayment.save()

            res.json({ newPayment })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getPayment: async (req, res) => {
        try {
            const pay = new APIfeatures(Payments.find({ user: req.params.id }), req.query).paginating();

            const payments = await pay.query.sort('-createdAt')
                .populate("user ", "avatar full_name")
            res.json({
                result: payments.length,
                payments,
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getAllPayment: async (req, res) => {
        try {
            const pay = new APIfeatures(Payments.find(), req.query).paginating();

            const payments = await pay.query.sort('-createdAt')
                .populate("user ", "avatar full_name")
            res.json({
                result: payments.length,
                payments,
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateStatus: async (req, res) => {
        try {
            const { status } = req.body

            const payment = await Payments.findOneAndUpdate({ _id: req.params.id }, {
                status
            })

            res.json({
                msg: "Updated Estate!",
                newPayment: {
                    ...payment._doc,
                    status
                }
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}


export default paymentCtrl