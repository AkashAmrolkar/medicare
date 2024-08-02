import mongoose from 'mongoose'
const addressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
})

const medicalRecordSchema = new mongoose.Schema({
    labReport: { 
        type: String, //File in pdf image or doc
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    }
});

const medicalDetailSchema = new mongoose.Schema({
    BMI: { 
        type: Number, 
        required: true 
    },
    heartRate: { 
        type: Number, 
        required: true         
    },
    weight: { 
        type: Number, 
        required: true         
    },
    date: { 
        type: Date, 
        required: true, 
        default: Date.now         
    }
});

const patientSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    address:{addressSchema},
    medicalDetails: [medicalDetailSchema],
    medicalRecords: [medicalRecordSchema]

})

export default mongoose.model('Patient', patientSchema)