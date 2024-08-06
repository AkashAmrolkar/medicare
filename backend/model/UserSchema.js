import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true     
  },
  fullName: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true,
    unique: true 
  },
  profile: { 
    type: String 
  },
  role: {
    type: String,
    enum: ["Patient", "Doctor", "Admin"],
    default: "Patient",
  },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

// hash password before save

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); // Await the hash function
    next();
  } catch (error) {
    next(error); // Pass any errors to the next middleware
  }
});

// Compare Password

userSchema.methods.matchPassword = async function(enteredpassword){
  return await bcrypt.compare(enteredpassword, this.password)
}


export default mongoose.model("User", userSchema);
