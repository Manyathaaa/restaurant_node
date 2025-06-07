import express from "express";
import authmiddleware from "../middlewares/authmiddleware.js";
import {
  createfoodController,
  getallfoodController,
} from "../controllers/foodcontrollers.js";

const router = express.Router();

//create food
router.post("/create", authmiddleware, createfoodController);

//getall food
router.get("/getall", authmiddleware, getallfoodController);

export default router;
