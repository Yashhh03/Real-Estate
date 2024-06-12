import express from "express";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);

app.listen(8088, () => {
  console.log("Server is running on port 8088");
});
