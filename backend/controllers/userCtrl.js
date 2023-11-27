import Users from '../models/userModel.js'

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

            if (!user) return res.status(400).json({ msg: "User does not exist." })

            res.json({ user })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateUser: async (req, res) => {
        try {
            const { avatar, full_name, mobile, address } = req.body
            if (!full_name) return res.status(400).json({ msg: "Please add your full name." })

            await Users.findOneAndUpdate({ _id: req.user._id }, {
                avatar, full_name, mobile, address
            })

            res.json({ msg: "Update Success!" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}


export default userCtrl