import express from "express"; // express is a web framework for Node.js
//web applications aur APIs banane ke liye use hota hai
import cors from "cors"; //allowing your server to accept requests from different domains
//Do domains ke beech secure data sharing allow karta hai
import morgan from "morgan"; // helps with debugging and monitoring.    HTTP request logger middleware for Node.js.
//Morgan server par aane wali requests ka record rakhne ke liye use hota hai.

import dotenv from "dotenv"; // This lets you keep sensitive data out of your codebase and manage them securely.
import connectDb from "./config/db.js"; // import the connectDb function to connect to the database
import authroutes from "./routes/authroutes.js";
import userroutes from "./routes/userroutes.js";
import testrouter from "./routes/testrouter.js";

const app = express();

// Configure dotenv
dotenv.config(); // you can access these variables in your code using process.env.VARIABLE_NAME

// Connect to the database
connectDb(); // call the connectDb function to connect to the database

// Middlewares
app.use(morgan("dev")); // use morgan middleware to log requests in development mode...,, dev means development
app.use(cors()); // use cors middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/api/v1/auth", authroutes); // Register auth routes
app.use("/api/v1/test", testrouter);
app.use("/api/v1/user", userroutes);

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the API</h1>");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
