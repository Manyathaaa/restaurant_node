import userModel from "../models/users.js";

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
