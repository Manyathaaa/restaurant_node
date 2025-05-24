import express from "express";
import testusercontroller from "../controllers/testcontroller.js";

//require object
const router = express.Router(); // create a new router object
// router is used to handle requests and responses for a specific route
//route means a specific URL path that the server listens to

//routes get, post, put, delete
router.get("/test-user", testusercontroller);

//export
export default router;
