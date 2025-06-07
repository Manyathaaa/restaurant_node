import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  image: {
    type: String,
    default:
      "https://tse4.mm.bing.net/th?id=OIP.WQ5CCGBla4v2xYuYv1WMuwHaHa&pid=Api&P=0&h=180",
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  category: {
    type: String,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  ratingCount: {
    type: Number,
    default: 0,
  },
  foodTags: {
    type: [String],
  },
  code: {
    type: String,
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

const foodModel = mongoose.model("Food", foodSchema);
export default foodModel;
