import express from "express";
import {
  createRestaurantController,
  getAllrestaurantController,
  getrestaurantByIdController,
  deleterestaurantByIdController,
} from "../controllers/restaurantcontroller.js"; // Correct import
import authmiddleware from "../middlewares/authmiddleware.js";

const router = express.Router();

// Define the create restaurant route
router.post("/create", createRestaurantController); // Use the correct controller

//get all restaurant
router.get("/getall", getAllrestaurantController);

//get by id
router.get("/get/:id", getrestaurantByIdController);

//delete by id
router.delete("/delete/:id", authmiddleware, deleterestaurantByIdController);

export default router;
