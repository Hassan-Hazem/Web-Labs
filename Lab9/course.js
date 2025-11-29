import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String
  
  },

  description: {
    type: String
 
  },

  instructorName: {
    type: String
   
  },

  price: {
    type: Number
   
  },

  category: {
    type: String,
    enum: ["Web DEV", "design", "marketing", "business", "other"]
    
  },

  enrolledStudents: {
    type: Number,
    default: 0
  }
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
