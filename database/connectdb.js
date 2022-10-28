import mongoose from "mongoose";


try {
    mongoose.connect(process.env.DATABASE_MONGO_CLOUD)
    console.log("MongoDB connected")
} catch (error) {
    console.log("MongoDB error on conection")

}