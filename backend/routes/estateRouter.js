import express from 'express'
import estateCtrl from '../controllers/estateCtrl.js'
import auth from '../middleware/auth.js'

const estateRouter = express.Router()

estateRouter.route('/estates')
    .post(auth, estateCtrl.createEstate)
    .get(auth, estateCtrl.getEstates)

estateRouter.route('/estate/:id')
    .patch(auth, estateCtrl.updateEstate)
    .get(auth, estateCtrl.getEstate)
    .delete(auth, estateCtrl.deleteEstate)

estateRouter.patch('/estate/:id/like', auth, estateCtrl.likeEstate)

estateRouter.patch('/estate/:id/unlike', auth, estateCtrl.unLikeEstate)

estateRouter.get('/user_estates/:id', auth, estateCtrl.getUserEstates)


export default estateRouter