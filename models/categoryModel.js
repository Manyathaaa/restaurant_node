import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  ImageUrl: {
    type: String,
    default:
      "https://tse4.mm.bing.net/th?id=OIP.WQ5CCGBla4v2xYuYv1WMuwHaHa&pid=Api&P=0&h=180",
  },
});

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;
