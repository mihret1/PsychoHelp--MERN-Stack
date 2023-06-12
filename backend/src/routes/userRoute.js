import express from 'express'
import { SignUp,Login } from '../controllers/userController.js'
const router=express.Router()


router.post('/login',Login)
router.post('/signup',SignUp)

export default router