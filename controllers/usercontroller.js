import userModel from "../models/users.js"; // Import user model

export const getuserController = async (req, res) => {
  try {
    const { id, email, password } = req.body;

    console.log("Request Body:", req.body); // Log the request body

    let user;
    if (id) {
      console.log("Searching by ID:", id); // Log the ID being searched
      user = await userModel.findById(id);
    } else if (email && password) {
      console.log("Searching by Email and Password:", { email, password }); // Log the query
      user = await userModel.findOne({ email, password });
    } else {
      return res.status(400).send({
        success: false,
        message: "Either ID or Email and Password must be provided",
      });
    }

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    user.password = undefined; // Hide password in the response
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
