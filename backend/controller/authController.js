import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import Users from "../model/UserSchema.js";
import Doctor from "../model/DoctorSchema.js"

const generateToken = user =>{
    return jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d',
    })
} 

// export const getAllUsers = async (req, res, next) => {
//     let user;
//     try {
//         user = await Users.find()
//     } catch (error) {
//         console.log(error)
//     }
//     if (!user) {
//         return res.status(404).json({ message: "No user found" })
//     }
//     return res.status(200).json({ user })
// }

export const registerUser = async (req, res, next) => {
    const { email,password,name, role, gender, photo } = req.body;
    let user;
    try {
        if(role==='patient'){
            user = await Users.findOne({ email })
        }
        if(role==='doctor'){
            user = await Doctor.findOne({ email })
        }
        
    } catch (error) {
        console.log(error)
    }
    if (user) {
        res.status(404).json({ message: "User already registered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt)
    let newUser
    if(role==='patient'){
        newUser = new Users({
            email,
            password:hashPass,
            name,
            role,
            gender,
            photo
        })
    }
    if(role==='doctor'){
        newUser = new Users({
            email,
            password:hashPass,
            name,
            role,
            gender,
            photo
        })
    }
    try {

        newUser.save();
        console.log("User added successfully..!!")
    } catch (error) {
        console.log("Establishing error while registering")
    }
    return res.status(201).json({ Users })
}

export const login = async (req, res, next) => {
    const {email} = req.body;
    try {
        let user;
        const patient = await Users.findOne({email});
        const doctor = await Doctor.findOne({email});
        if(patient){
            user = patient
        }
        if(doctor){
            user = doctor
        }

        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        const isPassMatch = await bcrypt.compare(req.body.password, user.password);

        if(!isPassMatch){
            return res.status(400).json({message: "Invalid Credentials"})
        }

        const token = generateToken(user);

        const {password, role, appointments, ...rest} = user._doc

        console.log(res.status());

        res.status(201).json({message: "Succeefully login", token, data: {...rest}, role})
        
        
    } catch (error) {
        return res.status(404).json({message: "Login Failed"})
    }
    
}


