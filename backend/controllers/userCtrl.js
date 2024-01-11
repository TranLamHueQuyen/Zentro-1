import Users from '../models/userModel.js'
import Estates from '../models/estateModel.js';
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371;

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;
    return distance;
}
const userCtrl = {
    searchUser: async (req, res) => {
        try {
            const users = await Users.find({ full_name: { $regex: req.query.full_name } })
                .limit(10).select("full_name avatar")

            res.json({ users })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await Users.findById(req.params.id).select('-password')
            const estates = await Estates.find({ user: req.params.id })

            if (!user) return res.status(400).json({ msg: "User does not exist." })

            res.json({ user, lengthEstates: estates.length })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getAllUser: async (req, res) => {
        try {
            const user = await Users.find()
            const roleUsers = user.filter(u => u.role === 1);

            if (!user) return res.status(400).json({ msg: "User does not exist." })

            res.json({ user: roleUsers })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateUser: async (req, res) => {
        try {
            const { avatar, full_name, mobile, address } = req.body
            if (!avatar) return res.status(400).json({ msg: "Please add your avatar." })
            if (!full_name) return res.status(400).json({ msg: "Please add your full name." })
            if (!address) return res.status(400).json({ msg: "Please add your address." })

            await Users.findOneAndUpdate({ _id: req.user._id }, {
                avatar, full_name, mobile, address
            })

            res.json({ msg: "Update Success!" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateStatusUser: async (req, res) => {
        try {
            const { status } = req.body

            const user = await Users.findOneAndUpdate({ _id: req.params.id }, {
                status
            })

            res.json({
                msg: "Update Success!",
                newUser: {
                    ...user._doc,
                    status
                }
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}


export default userCtrl