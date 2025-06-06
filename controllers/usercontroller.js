import userModel from "../models/users.js";
import bcrypt from "bcrypt";

export const getuserController = async (req, res) => {
  try {
    // Get user ID from decoded token
    const userId = req.user?.id; //? Ka mtlb hota hai ki agar hoga toh lega nhi toh undefined

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

//update

export const UpdateUserController = async (req, res) => {
  try {
    //find user
    const user = await userModel.findById({ _id: req.user.id });

    //validation
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "user not found",
        error,
      });
    }

    //update
    const { name, address, phone } = req.body;
    if (name) user.name = name;
    if (address) user.address = address;
    if (phone) user.phone = phone;

    //save

    await user.save();
    return res.status(200).send({
      success: true,
      message: "saved successfully",
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      success: false,
      message: "update failure",
      error,
    });
  }
};

//resetpassword
export const resetpasswordController = async (req, res) => {
  try {
    const { email, newpassword, answer } = req.body;
    if (!email || !newpassword || !answer) {
      return res.status(500).send({
        success: false,
        message: "please provide all fields",
      });
    }
    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "user not found",
        error,
      });
    }
    //hashed password
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newpassword, salt);
    user.password = hashedPassword;
    await user.save();
    return res.status(400).send({
      success: true,
      message: "reset password successfull",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "failure in reset password",
      error,
    });
  }
};

//update password

export const Updatepasswordcontroller = async (req, res) => {
  try {
    // Find user by ID
    const user = await userModel.findById(req.user.id); // Corrected query
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Get data from request body
    const { oldpassword, newpassword } = req.body;
    if (!oldpassword || !newpassword) {
      return res.status(400).send({
        success: false,
        message: "Old password and new password are required",
      });
    }

    // Check if old password matches the stored password
    const isMatch = await bcrypt.compare(oldpassword, user.password); // Compare oldpassword with hashed password
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "Incorrect old password",
      });
    }

    // Hash the new password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newpassword, salt);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).send({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.log("Error in updating password:", error);
    res.status(500).send({
      success: false,
      message: "Update password failed",
      error: error.message,
    });
  }
};

//delete profile
export const profileDeleteController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "profile deleted successfully",
    });
  } catch (error) {
    console.log("something went wrong", error);
    res.status(404).send({
      success: false,
      message: "delete profile failed",
      error,
    });
  }
};
