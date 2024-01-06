import express from 'express'
import auth from "../middleware/auth.js"
import userCtrl from "../controllers/userCtrl.js"

const userRouter = express.Router()

userRouter.get('/search', auth, userCtrl.searchUser)

userRouter.get('/user/:id', auth, userCtrl.getUser)

userRouter.patch('/user', auth, userCtrl.updateUser)

export default userRouter