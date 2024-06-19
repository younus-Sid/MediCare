import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL,{
        dbName : "HOSPITAL_MANAGEMENT_SYSTEM"
    }).then(()=>{
        console.log("Connected to Database")
    }).catch(err=>{
        console.log(`Some error occur to database: ${err}`)
    })
}