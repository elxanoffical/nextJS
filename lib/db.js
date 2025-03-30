import mongoose from "mongoose";

const MONGODB_URI =  'mongodb://localhost:27017/PapaJohns'

if (!MONGODB_URI)
    throw new Error("Please define the mongoDB URI")

export const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 1)
            return

        await mongoose.connect(MONGODB_URI)
        console.log('MongoDB Connected!!')
    } catch (err) {
        console.log('MongoDB Not Connected!!', err)
        process.exit(1)
    }
}