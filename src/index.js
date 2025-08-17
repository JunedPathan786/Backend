// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on((error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MONGO db connection failed !!!`, error);
  });


i






















/*  First approach

import express from "express"
const app = express()

//IIFE 
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error", (error)=>{
            console.log("ERROR",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error", error)
        throw error
    }
})()
    
*/
