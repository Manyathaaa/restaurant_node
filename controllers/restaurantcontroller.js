import restaurantModel from "../models/restaurantModel.js";

export const createRestaurantController = async (req, res) => {
  try {
    const restaurant = new restaurantModel(req.body);
    await restaurant.save();

    return res.status(201).send({
      success: true,
      message: "Restaurant created successfully",
      restaurant,
    });
  } catch (error) {
    console.log("Error in creating restaurant:", error);
    res.status(500).send({
      success: false,
      message: "Failed to create restaurant",
      error: error.message,
    });
  }
};
