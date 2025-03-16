import mongoose from "mongoose";

const HospitalYearsSchema = new mongoose.Schema({
  hospitalName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital"
  },
  timeSpent: {
    type: Number,  // Time spent in years (or months, depending on your use case)
    required: true
  }
});

export const HospitalYears = mo ngoose.model("hospitalYears", HospitalYearsSchema);
  