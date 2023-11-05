import Doctors from "../model/DoctorSchema.js"

export const updateDoctor = async (req, res, next) => {
    const id = req.params.id;
    try {
        const updateDoctor = await Doctors.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).json({success: true, message: "Successfully Updated..!", data: updateDoctor})
    } catch (error) {
        console.log("error")
        res.status(500).json({success: false, message: "Failed to Update..!"})

    }
}

export const deleteDoctor = async (req, res, next) => {
    const id = req.params.id;
    try { 
        await Doctors.findByIdAndDelete(id)
        res.status(200).json({success: true, message: "Doctor Deleted Successfully"})
    } catch (error) {
        console.log("error")
        res.status(500).json({success: false, message: "Failed to delete Doctor..!"})

    }
}

export const getSingleDoctor = async (req, res, next) => {
    const id = req.params.id;
    try { 
        const doctor = await Doctors.findById(id).select('-password')
        res.status(200).json({success: true, message: "doctor found", data: doctor})
    } catch (error) {
        console.log("error")
        res.status(404).json({success: false, message: "doctor not found"})

    }
}

export const getAllDoctors = async (req, res, next) => {
    
    try { 
        const {query} = req.query
        let allDoctors;
        if(query){
            allDoctors = await Doctors.find({
                isApproved: "approved", 
                $or: [
                    {name: {$regex: query, $options:"i"}},
                    {specialization: {$regex: query, $options:"i"}}
                ],
            }).select('-password')
            res.status(200).json({success: true, message: "Doctor found", data: allDoctors})
        } else{
            allDoctors = await Doctors.find({ isApproved: "approved"}).select('-password')  
        }
        res.status(200).json({success: true, message: "Doctor found", data: allDoctors})
        
    } catch (error) {
        console.log("error")
        res.status(404).json({success: false, message: "Doctors not found"})

    }
}