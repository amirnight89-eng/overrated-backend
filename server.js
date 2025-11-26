const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.json({ message: "Overrated Backend Running" });
});

// Booking endpoint
app.post("/api/book", (req, res) => {
  const data = req.body;
  console.log("New booking:", data);
  res.json({ status: "success", received: data });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Backend running on port " + port));
