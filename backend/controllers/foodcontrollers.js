// filepath:
import foodModels from "../models/foodModels.js";
import orderModel from "../models/orderModels.js"; // Corrected import path

// Create food
export const createfoodController = async (req, res) => {
  try {
    const food = new foodModels(req.body);
    await food.save();
    return res.status(200).send({
      success: true,
      message: "Food created successfully",
      food,
    });
  } catch (error) {
    console.log("Error in creating food:", error);
    return res.status(500).send({
      success: false,
      message: "Failed to create food",
      error: error.message,
    });
  }
};

// Get all foods
export const getallfoodController = async (req, res) => {
  try {
    const food = await foodModels.find({});
    if (!food || food.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No food items found",
      });
    }
    res.status(200).send({
      success: true,
      totalfood: food.length,
      food,
    });
  } catch (error) {
    console.log("Error in fetching all foods:", error);
    return res.status(500).send({
      success: false,
      message: "Failed to fetch food items",
      error: error.message,
    });
  }
};

// Update food
export const updatefoodController = async (req, res) => {
  try {
    const { id } = req.params;
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
    } = req.body;

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
      id,
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
      { new: true }
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

// Delete food
export const deletefoodByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "Food ID is required",
      });
    }

    const deletedFood = await foodModels.findByIdAndDelete(id);
    if (!deletedFood) {
      return res.status(404).send({
        success: false,
        message: "Food item not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Food item deleted successfully",
    });
  } catch (error) {
    console.log("Error in deleting food item:", error);
    return res.status(500).send({
      success: false,
      message: "Failed to delete food item",
      error: error.message,
    });
  }
};

// Place order
export const createOrderController = async (req, res) => {
  try {
    const { foods, payment, buyer, status } = req.body;

    // Validate required fields
    if (!foods || foods.length === 0 || !payment) {
      return res.status(400).send({
        success: false,
        message: "Please provide food in cart or payment method",
      });
    }

    // Create the order
    const newOrder = new orderModel({
      foods,
      payment,
      buyer,
      status: status || "preparing",
    });

    await newOrder.save();

    return res.status(201).send({
      success: true,
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    console.log("Error in creating order:", error);
    return res.status(500).send({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
};

// Update order status
export const orderstatusController = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    // Validate required fields
    if (!orderId || !status) {
      return res.status(400).send({
        success: false,
        message: "Order ID and status are required",
      });
    }

    // Update the order status
    const updatedOrder = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).send({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Order status updated successfully",
      updatedOrder,
    });
  } catch (error) {
    console.log("Error in updating order status:", error);
    return res.status(500).send({
      success: false,
      message: "Failed to update order status",
      error: error.message,
    });
  }
};
