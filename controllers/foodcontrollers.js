import foodModels from "../models/foodModels.js";

export const createfoodController = async (req, res) => {
  try {
    const food = new foodModels(req.body);
    await food.save();
    return res.status(200).send({
      success: true,
      message: "successfully created",
      food,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).send({
      success: false,
      message: "failed to create",
      error,
    });
  }
};

//getall foods
export const getallfoodController = async (req, res) => {
  try {
    const food = await foodModels.find({});
    if (!food) {
      return res.status(500).send({
        success: false,
        message: "provide food",
      });
    }
    res.status(200).send({
      success: true,
      totalfood: food.length,
      food,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).send({
      success: false,
      message: "failed to get all food",
      error,
    });
  }
};

//update food
export const updatefoodController = async (req, res) => {
  try {
    const { id } = req.params; // Get the food ID from the request parameters
    const {
      title,
      description,
      image,
      price,
      category,
      isAvailable,
      ratings,
      ratingCount,
      foodTags,
      code,
      restaurantId,
    } = req.body; // Get the updated data from the request body

    // Validate the ID
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "Food ID is required",
      });
    }

    // Validate required fields
    if (!title || !description || !price) {
      return res.status(400).send({
        success: false,
        message: "Title, description, and price are required",
      });
    }

    // Find and update the food item
    const updatedFood = await foodModels.findByIdAndUpdate(
      id, // Pass the ID to find the food item
      {
        title,
        description,
        image,
        price,
        category,
        isAvailable,
        ratings,
        ratingCount,
        foodTags,
        code,
        restaurantId,
      },
      { new: true } // Return the updated document
    );

    if (!updatedFood) {
      return res.status(404).send({
        success: false,
        message: "Food item not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Food item updated successfully",
      updatedFood,
    });
  } catch (error) {
    console.log("Error in updating food item:", error);
    return res.status(500).send({
      success: false,
      message: "Failed to update food item",
      error: error.message,
    });
  }
};
