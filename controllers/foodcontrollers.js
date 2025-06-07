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
