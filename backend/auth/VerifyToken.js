import jwt from 'jsonwebtoken'

import Users from "../model/UserSchema.js";
import Doctor from "../model/DoctorSchema.js"

export const authenticate = async (req, res, next) => {
    const authToken = req.headers.authorization
    console.log('authentication', authToken)
    if(!authToken || !authToken.startsWith('Bearer')){
        return res.status(401).json({success: false, message: 'No token, authorization denied'})
    }

    try {
        const token = authToken.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY) 
        req.userId = decoded.userId
        req.role = decoded.role
        next()
    } catch (error) {
        console.log(error)
        if(error.name === "TokenExpiredError"){
            res.status(401).json({message: 'Token is expired'})
        }

        return res.status(401).json({success: false, message: 'Invalid Token'})
    }
}

export const restrict = roles => async(req, res, next) =>{
    const userId = req.params.id;
    let user;
    const patient = await Users.findById(userId)
    const doctor = await Doctor.findById(userId)

    if(patient){
        user = patient
    }

    if(doctor){
        user = doctor
    }
    if(!roles.includes(user.role)){
        res.status(401).json({message: "You are not authorized"})
    }
    next();
}