import express from 'express'
import paymentCtrl from '../controllers/paymentCtrl.js'
import auth from '../middleware/auth.js'

const paymentRouter = express.Router()

paymentRouter.post('/payment', auth, paymentCtrl.createPayment)

paymentRouter.route('/payment/:id')
    .get(auth, paymentCtrl.getPayment)
    .patch(auth, paymentCtrl.updateStatus)

paymentRouter.get('/allPayment', auth, paymentCtrl.getAllPayment)

export default paymentRouter