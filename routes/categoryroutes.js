import express from "express";
import authmiddleware from "../middlewares/authmiddleware.js";
import {
  createcategoryController,
  getcategoryController,
  //updatecategoryController,
} from "../controllers/categorycontroller.js";

const router = express.Router();

//create category
router.post("/create", authmiddleware, createcategoryController);

//get all category
router.get("/getall", authmiddleware, getcategoryController);

//update category
//router.put("/update",authmiddleware, updatecategoryController);

export default router;
