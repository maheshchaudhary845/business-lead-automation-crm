import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res)=>{
    res.status(200).json({
        success: true,
        message: "Server is running"
    })
});

const PORT = process.env.PORT || 5000;

const startServer = async ()=>{
    try{
        await connectDB();

        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`);
        })
    }catch(err){
        console.error("Failed to start server:", err);
        process.exit(1);
    }
}

startServer();