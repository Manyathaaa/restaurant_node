import express from "express";
import authmiddleware from "../middlewares/authmiddleware.js";
import { createfoodController } from "../controllers/foodcontrollers.js";

const router = express.Router();

//create food
router.post("/create", authmiddleware, createfoodController);

export default router;
