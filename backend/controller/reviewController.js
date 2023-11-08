import Reviews from "../model/ReviewSchema";
import Doctors from "../model/DoctorSchema";

export const getAllReviews = async(req, res) =>{
    try {
        const reviews = await Reviews.find({})
        res.status(201).json({message: "Reviews succcessfully", data: reviews })
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Reviews not found"})

    }
}

export const createReviews = async(req, res)=> {
    
}