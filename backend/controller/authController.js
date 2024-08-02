import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

import User from "../model/UserSchema.js";

import { generateAccessToken, generateRefreshToken } from '../utils/jwt.js';

export const register = async (req, res) => {
    try {
        const { fullName, email, phone, password } = req.body;

        const user = await User.findOne({email})
        if(user){
            return res.status(404).json({message: 'User already exist'})
        }

        const newUser = new User({
            fullName, email, phone, password
        })
        console.log(newUser)
        await newUser.save()
        const accessToken = generateAccessToken(newUser)
        const refreshToken = generateRefreshToken(newUser)
        res.cookie('refreshToken', refreshToken, {httpOnly: true, secure: true})
        //res.json({accessToken})
        return res.status(201).json({message: 'User Created Successfully..!', accessToken})

    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message: 'Invaid User..!'})
        }
        if(user && user.matchPassword(password)){
            const accessToken = generateAccessToken(user)
            const refreshToken = generateRefreshToken(user)
            res.cookie('refreshToken', refreshToken, {httpOnly: true, secure: true})
            res.json({accessToken})
        }
    } catch (error) {
        console.log(error)
    }
}

export const refreshToken = async (req,res)=>{
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) {
        return res.status(401).json({message: 'Token Invalid'})
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
        if(err){
            console.log(err);
            return res.status(400).json({message: 'Error in verifying refresh token'})
        }

        const accessToken = generateAccessToken(user);
        res.json({accessToken})
    })
}