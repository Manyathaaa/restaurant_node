import express from "express";
import { getuserController } from "../controllers/usercontroller.js";
import authmiddleware from "../middlewares/authmiddleware.js"; // Import authmiddleware

const router = express.Router();

//routes
//get user || get
router.get("/getuser", authmiddleware, getuserController);

export default router;
