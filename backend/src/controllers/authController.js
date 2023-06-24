import express from 'express'
// import UserModel from '../models/userModel'
import bcrypt from 'bcryptjs'
import UserModel from '../models/authModel.js'
import jwt from 'jsonwebtoken'



export const  SignUp=async(req,res)=>{

    const {firstname,lastname,email,password,confrimPassword}=req.body
    try{


        // if (!firstname || !lastname || !email || !password) return res.status(400).json({err:'all field are required'})
        const alreadySignup= await UserModel.findOne({email:email})
        if(alreadySignup) return res.status(400).send('user already registerd')
        if(password.length<8) return res.status(400).send('password is too shrt')
        if(password !== confrimPassword) res.status(400).send('password and confrim password not matched')
        const hashedPassword= await bcrypt.hash(password,10)
        const user= await UserModel.create({name:`${firstname} ${lastname}`,email,password:hashedPassword})

       
        const token=jwt.sign(
            {email:user.email,id:user._id},
            'psychohelp',
            {expiresIn:'1d'}
            )
        res.status(201).json({result:user,token})

        
    }catch(error){
        console.log(error)
        res.status(400).json({err:'something is error'})
    }


}



export const Login=async(req,res)=>{

    const {email,password}=req.body
    try{
       if(!email || !password) return res.status(400).send('both email and password is required')
       const user= await UserModel.findOne({email})
       if(!user) return res.status(404).send('this user not find')
       const matched= await bcrypt.compare(password,user.password)
       if(!matched)  return res.status(404).send('unmatched password')

       const token=jwt.sign(
        {email:user.email,id:user._id},
        'psychohelp',
        {expiresIn:'1d'}
        )
       res.status(200).json({result:user,token})
       
    }catch(error){
        console.log(error)
        res.json({err:'something is error'})

    }
}

