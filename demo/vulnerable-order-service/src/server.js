const express = require("express");
const { processOrder } = require("./processOrder");

const app = express();
app.use(express.json());

app.post("/api/orders", async (req, res) => {
  try {
    const order = await processOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    });
  }
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("Order service running on http://localhost:3000");
});
