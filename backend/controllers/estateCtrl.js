import Estates from '../models/estateModel.js';
import Reviews from '../models/reviewModel.js';

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

const estateCtrl = {
    createEstate: async (req, res) => {
        try {
            const { name, listType, images, address, price, property } = req.body

            if (images.length === 0)
                return res.status(400).json({ msg: "Please add your photo." })

            const newEstate = new Estates({
                name, listType, images, address, price, property, user: req.user._id
            })
            await newEstate.save()

            res.json({
                msg: 'Created Estate!',
                newEstate: {
                    ...newEstate._doc,
                    user: req.user
                }
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getEstates: async (req, res) => {
        try {
            const features = new APIfeatures(Estates.find({}), req.query).paginating()

            const estates = await features.query.sort('price')
                .populate("avatar full_name")
                .populate({
                    path: "reviews",
                    populate: {
                        path: "user likes",
                        select: "-password"
                    }
                })

            res.json({
                msg: 'Success!',
                result: estates.length,
                estates
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateEstate: async (req, res) => {
        try {
            const { name, listType, images, address, price, property } = req.body

            const estate = await Estates.findOneAndUpdate({ _id: req.params.id }, {
                name, listType, images, address, price, property
            }).populate("user", "avatar full_name")
                .populate({
                    path: "reviews",
                    populate: {
                        path: "user likes",
                        select: "-password"
                    }
                })

            res.json({
                msg: "Updated Estate!",
                newEstate: {
                    ...estate._doc,
                    name, listType, images, address, price, property
                }
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    likeEstate: async (req, res) => {
        try {
            const estate = await Estates.find({ _id: req.params.id, likes: req.user._id })
            if (estate.length > 0) return res.status(400).json({ msg: "You liked this Estate." })

            const like = await Estates.findOneAndUpdate({ _id: req.params.id }, {
                $push: { likes: req.user._id }
            }, { new: true })

            if (!like) return res.status(400).json({ msg: 'This post does not exist.' })

            res.json({ msg: 'Liked Estate!' })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    unLikeEstate: async (req, res) => {
        try {

            const like = await Estates.findOneAndUpdate({ _id: req.params.id }, {
                $pull: { likes: req.user._id }
            }, { new: true })

            if (!like) return res.status(400).json({ msg: 'This estate does not exist.' })

            res.json({ msg: 'UnLiked Estate!' })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getUserEstates: async (req, res) => {
        try {
            const features = new APIfeatures(Estates.find({ user: req.params.id }), req.query)
                .paginating()
            const estates = await features.query.sort("-createdAt")

            res.json({
                estates,
                result: estates.length
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getEstate: async (req, res) => {
        try {
            const estate = await Estates.findById(req.params.id)
                .populate("user likes", "avatar full_name address")
                .populate({
                    path: "Reviews",
                    populate: {
                        path: "user likes",
                        select: "-password"
                    }
                })

            if (!estate) return res.status(400).json({ msg: 'This estate does not exist.' })

            res.json({
                estate
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteEstate: async (req, res) => {
        try {
            const estate = await Estates.findOneAndDelete({ _id: req.params.id, user: req.user._id })
            await Reviews.deleteMany({ _id: { $in: estate.reviews } })

            res.json({
                msg: 'Deleted Estate!',
                newEstate: {
                    ...estate,
                    user: req.user
                }
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

export default estateCtrl