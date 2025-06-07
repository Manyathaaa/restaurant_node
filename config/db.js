import mongoose from "mongoose";

const connectDb = async () => {
  // async is used for non blocking code execution
  //meaning they don't block the execution of other code while waiting for a promise to resolve.
  try {
    await mongoose.connect(process.env.MONGO_URL);
    // await to pause the execution until a promise resolves or rejects.
    console.log(`database connected :${mongoose.connection.host}`);
  } catch (error) {
    console.log("not connected", error);
  }
};

//module.exports = connectDb; // export the connectDb function so that it can be used in server.js
export default connectDb; // export the connectDb function so that it can be used in server.js

//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
