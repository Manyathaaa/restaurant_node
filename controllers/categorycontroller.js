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
