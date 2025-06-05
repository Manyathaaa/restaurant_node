import userModel from "../models/users.js";

export const getuserController = async (req, res) => {
  try {
    // Get user ID from decoded token
    const userId = req.user?.id;

    if (!userId) {
      return res.status(400).send({
        success: false,
        message: "User ID is missing from token",
      });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    user.password = undefined; // Remove sensitive data

    return res.status(200).send({
      success: true,
      message: "User retrieved successfully",
      user,
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send({
      success: false,
      message: "Error in get user API",
      error: error.message,
    });
  }
};
