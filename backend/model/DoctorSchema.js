import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  hospital: {
    type:String,
    required: true,
  },
  yearOfExperience: {
    type: Number,
    required: true,
  },
  employmentType: {
    type: String,
    enum: ["Part Time", "Full Time"],
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  }
})

const educationSchema = new mongoose.Schema({
  institute: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true
  },

})

const awardSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type:String,
    required: true,
  },
});

const doctorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  designation: {
    type:String,
    required: true,
  },
  experience: [experienceSchema],
  education: [educationSchema],
  awards: [awardSchema]
});

export default mongoose.model("Doctor", doctorSchema);