import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}: ${conn.connection.port}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}