
import mongoose, { connect } from "mongoose"; 
import express from "express";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });



connectDB();
