import mongoose from "mongoose";
import { Hospital } from "./hospital.js";  // Import your Hospital model

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/healthDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("DB Connection Error:", err);
    process.exit(1);
  }
};

// Function to insert hospitals
const insertHospitals = async () => {
  try {
    const hospital1 = new Hospital({
      name: "City Hospital",
      address: "123 Main St",
      city: "Lucknow",
      pincode: "226001",
      specialization: "Cardiology"
    });

    const hospital2 = new Hospital({
      name: "Metro Hospital",
      address: "456 MG Road",
      city: "Delhi",
      pincode: "110001",
      specialization: "Neurology"
    });

    // Save to database
    await hospital1.save();
    await hospital2.save();

    console.log("Hospitals added successfully!");
  } catch (error) {
    console.error("Error adding hospitals:", error);
  } finally {
    mongoose.connection.close(); // Close the connection after inserting
  }
};

// Run the functions
const start = async () => {
  await connectDB();
  await insertHospitals();
};

start();
