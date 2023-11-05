
import Users from "../model/UserSchema.js";
import Doctor from "../model/DoctorSchema.js"

export const updateUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        const updateUser = await Users.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).json({success: true, message: "Successfully Updated..!", data: updateUser})
    } catch (error) {
        console.log("error")
        res.status(500).json({success: false, message: "Failed to Update..!"})

    }
}

export const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    try { 
        await Users.findByIdAndDelete(id)
        res.status(200).json({success: true, message: "User Deleted Successfully"})
    } catch (error) {
        console.log("error")
        res.status(500).json({success: false, message: "Failed to delete user..!"})

    }
}

export const getSingleUser = async (req, res, next) => {
    const id = req.params.id;
    try { 
        const user = await Users.findById(id).select('-password')
        res.status(200).json({success: true, message: "User found", data: user})
    } catch (error) {
        console.log("error")
        res.status(404).json({success: false, message: "User not found"})

    }
}

export const getAllUsers = async (req, res, next) => {
    try { 
        const allUsers = await Users.find({}).select('-password')
        res.status(200).json({success: true, message: "User found", data: allUsers})
    } catch (error) {
        console.log("error")
        res.status(404).json({success: false, message: "Users not found"})

    }
}