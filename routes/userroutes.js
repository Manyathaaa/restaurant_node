import express from "express";
import {
  getuserController,
  UpdateUserController,
  Updatepasswordcontroller,
  resetpasswordController,
  profileDeleteController,
} from "../controllers/usercontroller.js";
import authmiddleware from "../middlewares/authmiddleware.js"; // Import authmiddleware

const router = express.Router();

//routes
//get user || get
router.get("/getuser", authmiddleware, getuserController);

//updte
router.put("/updateuser", authmiddleware, UpdateUserController);

//password
router.post("/updatepassword", authmiddleware, Updatepasswordcontroller);

//reset password
router.post("/resetpassword", authmiddleware, resetpasswordController);

//delete profile
router.delete("/deleteprofile/:id", authmiddleware, profileDeleteController);

export default router;
