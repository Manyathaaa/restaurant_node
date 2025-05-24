import express from "express"; // express is a web framework for Node.js
import cors from "cors"; //allowing your server to accept requests from different domains
import morgan from "morgan"; // helps with debugging and monitoring.    HTTP request logger middleware for Node.js.
import dotenv from "dotenv"; // This lets you keep sensitive data out of your codebase and manage them securely.
import testrouter from "./routes/testrouter.js"; // import the test router from the routes folder
import connectDb from "./config/db.js"; // import the connectDb function to connect to the database

const app = express();

//configure dotenv
dotenv.config(); // you can access these variables in your code using process.env.VARIABLE_NAME

//connection database
connectDb(); // call the connectDb function to connect to the database

//middlewares
app.use(morgan("dev")); // use morgan middleware to log requests in development mode...,, dev means development
app.use(cors()); // use cors middleware
app.use(express.json()); // use express json middleware to parse JSON requests

const PORT = process.env.PORT;

//routes

app.use("/api/v1/test", testrouter); // use the test router for the /api/v1/test route
// This means that any request to /api/v1/test will be handled by the test router
// The test router will handle the requests and responses for the /api/v1/test route
app.get("/", (req, res) => {
  4;
  res.send("<h1>hello world</h1>");
});

app.listen(PORT, () => {
  console.log("server is running in port " + PORT);
});
