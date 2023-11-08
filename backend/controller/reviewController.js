import Reviews from "../model/ReviewSchema.js";
import Doctors from "../model/DoctorSchema.js";

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
    if(!req.body.doctor) req.body.doctor = req.params.doctorId
    if(!req.body.user) req.body.user = req.params.userId
    
    const newReview = new Reviews(req.body)
    try {
        const savedReview = await newReview.save()
        await Doctors.findByIdAndUpdate(req.body.doctor, {
            $push: {reviews: savedReview._id}
        })
        res.status(200).json({success: true, message: 'Review submitted', data: savedReview})
    } catch (error) {
        res.status(200).json({success: false, message:error.message})

    }
}