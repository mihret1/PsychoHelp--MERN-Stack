import express from 'express'
import { SignUp,Login } from '../controllers/authController.js'
const router=express.Router()


router.post('/signin',Login)
router.post('/signup',SignUp)

export default router