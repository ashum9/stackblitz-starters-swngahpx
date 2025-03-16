import mongoose from "mongoose";
import { Hospital } from "../models/hospital.js";

// Connect to MongoDB
const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/healthDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("✅ MongoDB Connected");
};

const insertHospitals = async () => {
  await connectDB();

  const hospitals = [
    {
      name: "City Hospital",
      address: "123 Main St",
      city: "Lucknow",
      pincode: "226001",
      specialization: "Cardiology"
    },
    {
      name: "Metro Hospital",
      address: "456 MG Road",
      city: "Delhi",
      pincode: "110001",
      specialization: "Neurology"
    }
  ];

  await Hospital.insertMany(hospitals);
  console.log("✅ Hospitals Added!");

  mongoose.connection.close();
};

insertHospitals();
// node data/insertHospitals.js
