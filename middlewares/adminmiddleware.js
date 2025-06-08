import userModel from "../models/usersModel.js"; // Correct import path

export const adminmiddleware = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.body.id); // Correct reference to userModel
    if (!user || user.usertype !== "admin") {
      return res.status(403).send({
        success: false,
        message: "Only admin access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Unauthorized access",
      error: error.message,
    });
  }
};
