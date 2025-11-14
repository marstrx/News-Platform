// import monggose and dotenv
import dotenv from "dotenv";
import mongoose from 'mongoose';


dotenv.config();

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_DB);
        console.log("MongoDb connected sucssfully");
        
    } catch (error) {
        console.log("Error",error.message);
        process.exit(1);
    }
}


export default connectDB;