import express from "express";
import cors from "cors"; // cors is a middleware that allows cross-origin requests
import morgan from "morgan"; // morgan is a middleware that logs HTTP requests
import dotenv from "dotenv"; // dotenv is a module that loads environment variables from a .env file
const app = express();

//configure dotenv
dotenv.config();
//middlewares
app.use(morgan("dev")); // use morgan middleware to log requests in development mode...,, dev means development
app.use(cors()); // use cors middleware
app.use(express.json()); // use express json middleware to parse JSON requests

const PORT = process.env.PORT;
app.get("/", (req, res) => {
  4;
  res.send("<h1>hello world</h1>");
});

app.listen(PORT, () => {
  console.log("server is running in port " + PORT);
});
