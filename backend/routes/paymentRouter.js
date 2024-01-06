import express from 'express'
import paymentCtrl from '../controllers/paymentCtrl.js'
import auth from '../middleware/auth.js'

const paymentRouter = express.Router()

paymentRouter.post('/payment', auth, paymentCtrl.createPayment)

export default paymentRouter