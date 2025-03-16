import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  diagnosedWith: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  bloodgroup: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ["m", "f", "nd"],
    required: true
  },
  admittedIn: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital"
  }
}, { timestamps: true });

export const Patient = mongoose.model("patient", patientSchema);
