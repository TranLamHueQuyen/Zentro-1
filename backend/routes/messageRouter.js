import express from 'express'
import messageCtrl from '../controllers/messageCtrl.js'
import auth from '../middleware/auth.js'

const messageRouter = express.Router()

messageRouter.post('/message', auth, messageCtrl.createMessage)

messageRouter.get('/conversations', auth, messageCtrl.getConversations)

messageRouter.get('/message/:id', auth, messageCtrl.getMessages)

messageRouter.delete('/message/:id', auth, messageCtrl.deleteMessages)

messageRouter.delete('/conversation/:id', auth, messageCtrl.deleteConversation)


export default messageRouter