import express from "express";
import authmiddleware from "../middlewares/authmiddleware.js";
import {
  createcategoryController,
  getcategoryController,
  updatecategoryController,
  deletecategoryByIdController,
} from "../controllers/categorycontroller.js";

const router = express.Router();

//create category
router.post("/create", authmiddleware, createcategoryController);

//get all category
router.get("/getall", authmiddleware, getcategoryController);

//update category
router.put("/update/:id", authmiddleware, updatecategoryController);

//delete category
router.delete("/delete/:id", authmiddleware, deletecategoryByIdController);

export default router;
