import express from "express";
import getuserController from "../controllers/usercontroller.js";
import authmiddleware from "../middlewares/authmiddleware.js"; // Import the authentication middleware

const router = express.Router();

//get user || get
router.get("/getuser", authmiddleware, getuserController);

export default router;
