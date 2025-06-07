import categoryModel from "../models/categoryModel.js";

export const createcategoryController = async (req, res) => {
  try {
    const { title, ImageUrl } = req.body;
    if (!title) {
      return res.status(500).send({
        success: false,
        message: "provide title",
      });
    }
    const newcategory = new categoryModel({ title, ImageUrl });
    await newcategory.save();
    res.status(200).send({
      success: true,
      message: "successfully created",
      newcategory,
    });
  } catch (error) {
    console.log("something went wrong", error);
    return res.status(404).send({
      success: false,
      message: "could not create",
      error,
    });
  }
};

//getall categories

export const getcategoryController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    if (!categories) {
      return res.status(500).send({
        success: false,
        message: "no categories found",
      });
    }
    res.status(200).send({
      success: true,
      message: "successfully got all",
      totalCategories: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).send({
      success: false,
      message: "failed to get all categories",
      error,
    });
  }
};

//update categories
export const updatecategoryController = async (req, res) => {
  try {
    const { id } = req.params; // Get the category ID from the request parameters
    const { title, ImageUrl } = req.body; // Get the updated data from the request body

    // Validate input
    if (!id || !title) {
      return res.status(400).send({
        success: false,
        message: "Category ID and title are required",
      });
    }

    // Find and update the category
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      id,
      { title, ImageUrl },
      { new: true } // Return the updated document
    );

    if (!updatedCategory) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Category updated successfully",
      updatedCategory, // Return the updated category
    });
  } catch (error) {
    console.log("Error in updating category:", error);
    return res.status(500).send({
      success: false,
      message: "Failed to update",
      error: error.message, // Include the error message in the response
    });
  }
};
