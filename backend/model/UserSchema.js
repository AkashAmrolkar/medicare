import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true     
  },
  name: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: Number, 
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
UserSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    return next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = bcrypt.hash(this.password, salt)
  next();
})

// Compare Password

UserSchema.methods.matchPassword = async function(enteredpassword){
  return await bcrypt.compare(enteredpassword, this.password)
}


export default mongoose.model("User", UserSchema);
