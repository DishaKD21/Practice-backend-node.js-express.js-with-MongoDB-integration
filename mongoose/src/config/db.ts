import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/usersdb");
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("DB connection failed:", err);
        process.exit(1);
    }
};
