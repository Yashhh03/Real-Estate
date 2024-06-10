import express from "express";

const app = express();

app.get("/api/test", (req, res) => {
  res.send("It Works!");
});

app.listen(8088, () => {
  console.log("Server is running on port 8088");
});
