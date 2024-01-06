import express from 'express'
import paymentCtrl from '../controllers/paymentCtrl.js'
import auth from '../middleware/auth.js'

const paymentRouter = express.Router()

paymentRouter.post('/payment', auth, paymentCtrl.createPayment)

paymentRouter.get('/payment/:id', auth, paymentCtrl.getPayment)

export default paymentRouter