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
