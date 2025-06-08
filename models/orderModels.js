import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  foods: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
    },
  ],
  payment: {},
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  status: {
    type: String,
    enum: ["preparing", "prepared", "on the way", "delivered"],
    default: "preparing",
  },
});

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;
