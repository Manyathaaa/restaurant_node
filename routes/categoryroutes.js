import express from "express";
import authmiddleware from "../middlewares/authmiddleware.js";
import { createcategoryController } from "../controllers/categorycontroller.js";

const router = express.Router();

//create category
router.post("/create", authmiddleware, createcategoryController);

export default router;
