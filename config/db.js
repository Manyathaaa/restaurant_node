import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`database connected :${mongoose.connection.host}`);
  } catch (error) {
    console.log("not connected", error);
  }
};

//module.exports = connectDb; // export the connectDb function so that it can be used in server.js
export default connectDb; // export the connectDb function so that it can be used in server.js
