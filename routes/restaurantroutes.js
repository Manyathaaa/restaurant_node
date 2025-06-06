import express from "express";
import { createRestaurantController } from "../controllers/restaurantcontroller.js"; // Correct import

const router = express.Router();

// Define the create restaurant route
router.post("/create", createRestaurantController); // Use the correct controller

export default router;
