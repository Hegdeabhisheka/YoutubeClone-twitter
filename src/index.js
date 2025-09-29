
import mongoose, { connect } from "mongoose"; 
import express from "express";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });



connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`server started at port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("server failed to start", err);
    });
