import express from "express";
import {
  createRestaurantController,
  getAllrestaurantController,
  getrestaurantByIdController,
} from "../controllers/restaurantcontroller.js"; // Correct import

const router = express.Router();

// Define the create restaurant route
router.post("/create", createRestaurantController); // Use the correct controller

//get all restaurant
router.get("/getall", getAllrestaurantController);

//get by id
router.get("/get/:id", getrestaurantByIdController);

export default router;
