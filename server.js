const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let workers = [];

app.post("/apply", (req, res) => {
  workers.push(req.body);
  res.send("Saved");
});

app.get("/workers", (req, res) => {
  res.json(workers);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});