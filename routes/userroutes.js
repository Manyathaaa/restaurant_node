import express from "express";
import {
  getuserController,
  UpdateUserController,
} from "../controllers/usercontroller.js";
import authmiddleware from "../middlewares/authmiddleware.js"; // Import authmiddleware

const router = express.Router();

//routes
//get user || get
router.get("/getuser", authmiddleware, getuserController);

//updte
router.put("/updateuser", authmiddleware, UpdateUserController);

export default router;
