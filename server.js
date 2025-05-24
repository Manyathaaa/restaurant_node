import express from "express";

const app = express();

const port = 1011;
app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.listen(port, () => {
  console.log("server is running in port " + port);
});
