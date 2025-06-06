import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String },
  foods: [
    {
      dishName: { type: String },
      dishPic: { type: String },
      price: { type: Number },
    },
  ],
  time: { type: String },
  pickup: { type: Boolean },
  delivery: { type: Boolean },
  isOpen: { type: Boolean },
  logoUrl: { type: String },
  rating: { type: Number },
  ratingCount: { type: Number },
  code: { type: Number },
  coords: {
    id: { type: Number },
    latitude: { type: Number },
    latitudeDelta: { type: Number },
    longitude: { type: Number },
    longitudeDelta: { type: Number },
  },
  address: { type: String },
});

const restaurantModel = mongoose.model("Restaurant", restaurantSchema);

export default restaurantModel;
