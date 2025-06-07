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

//get all reataurants

export const getAllrestaurantController = async (req, res) => {
  try {
    const restaurant = await restaurantModel.find({});
    if (!restaurant) {
      res.status(500).send({
        success: false,
        message: "no restaurant available",
      });
    }

    res.status(200).send({
      success: true,
      totalCount: restaurant.length,
      restaurant,
    });
  } catch (error) {
    console.log("something is error", error);
    return res.status(404).send({
      success: false,
      message: "failed to get all restaurants",
      error,
    });
  }
};

//get restaurant by id
export const getrestaurantByIdController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    if (!restaurantId) {
      return res.status(500).send({
        success: false,
        message: "provide restaurant id",
      });
    }
    const restaurant = await restaurantModel.findById(restaurantId);
    if (!restaurant) {
      return res.status(500).send({
        success: false,
        message: "no restaurant found",
      });
    }
    res.status(200).send({
      success: true,
      message: "successfully done",
    });
  } catch (error) {
    console.log("something error", error);
    return res.status(404).send({
      success: false,
      message: "failed to get restaurant by id",
      error,
    });
  }
};

//delete restaurant by id
export const deleterestaurantByIdController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    if (!restaurantId) {
      return res.status(500).send({
        success: false,
        message: "id not provided",
      });
    }

    await restaurantModel.findByIdAndDelete(restaurantId);
    return res.status(200).send({
      success: true,
      message: "deleted successfully",
    });
  } catch (error) {
    console.log("something went wrong", error);
    return res.status(404).send({
      success: false,
      message: "deletion failed",
      error,
    });
  }
};
