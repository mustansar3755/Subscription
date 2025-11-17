import { Router } from "express";

const authRouter = Router()

authRouter.post('/sign-up',(req,res)=>{res.send("Sign-Up Api Working")})
authRouter.post('/sign-in',(req,res)=>{res.send("Sign-In Api Working")})
authRouter.post('/sign-out',(req,res)=>{res.send("Sign-Out Api Working")})

export default authRouter