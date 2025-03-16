import mongoose from "mongoose";
import { Doctor } from "../models/doctor.js";
import { Hospital } from "../models/hospital.js";

// Connect to MongoDB
const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/healthDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("✅ MongoDB Connected");
};

const insertDoctors = async () => {
  await connectDB();

  // Fetch hospital references
  const hospital1 = await Hospital.findOne({ name: "City Hospital" });
  const hospital2 = await Hospital.findOne({ name: "Metro Hospital" });

  const doctors = [
    {
      name: "Dr. Rajesh Sharma",
      salary: 120000,
      qualification: "MBBS, MD (Cardiology)",
      experienceInYears: 10,
      worksInHospitals: [hospital1?._id]
    },
    {
      name: "Dr. Anjali Verma",
      salary: 90000,
      qualification: "MBBS, MS (Neurology)",
      experienceInYears: 7,
      worksInHospitals: [hospital2?._id]
    }
  ];

  await Doctor.insertMany(doctors);
  console.log("✅ Doctors Added!");

  mongoose.connection.close();
};

insertDoctors();
