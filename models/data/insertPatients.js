import mongoose from "mongoose";
import { Patient } from "../models/patient.js";
import { Hospital } from "../models/hospital.js";

// Connect to MongoDB
const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/healthDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("✅ MongoDB Connected");
};

const insertPatients = async () => {
  await connectDB();

  // Fetch hospital references
  const hospital1 = await Hospital.findOne({ name: "City Hospital" });
  const hospital2 = await Hospital.findOne({ name: "Metro Hospital" });

  const patients = [
    {
      name: "Amit Kumar",
      diagnosedWith: "Heart Disease",
      address: "House No. 45, Lucknow",
      age: 52,
      bloodgroup: "A+",
      gender: "m",
      admittedIn: hospital1?._id
    },
    {
      name: "Priya Singh",
      diagnosedWith: "Brain Stroke",
      address: "Sector 4, Delhi",
      age: 45,
      bloodgroup: "B-",
      gender: "f",
      admittedIn: hospital2?._id
    }
  ];

  await Patient.insertMany(patients);
  console.log("✅ Patients Added!");

  mongoose.connection.close();
};

insertPatients();
