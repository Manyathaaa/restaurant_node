import express from "express";
import authmiddleware from "../middlewares/authmiddleware.js";
import {
  createfoodController,
  getallfoodController,
  updatefoodController,
  deletefoodByIdController,
  createOrderController,
} from "../controllers/foodcontrollers.js";

const router = express.Router();

//create food
router.post("/create", authmiddleware, createfoodController);

//getall food
router.get("/getall", authmiddleware, getallfoodController);

//update food
router.put("/update/:id", authmiddleware, updatefoodController);

//delete food
router.delete("/delete/:id", authmiddleware, deletefoodByIdController);

//place order
router.post("/placeorder", authmiddleware, createOrderController);

export default router;
