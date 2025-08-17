import mongoose from 'mongoose';
import { DB_Name } from '../constants.js';


//DB is an another continents
const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        // console.log(connectionInstance);   
    } catch (error) {
        console.log("MONGODB connection Failed", error);
        process.exit(1)
    }
}

export default connectDB