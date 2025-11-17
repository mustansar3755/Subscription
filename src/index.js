import dotenv from "dotenv";
import express from "express";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionsRouter from "./routes/subsrcription.routes.js";

import connectDB from "./config/db.js";

// App Config
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

//API Endpoints
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionsRouter);


// DB Connection & Server Starting Point
connectDB().then(
  app.listen(port, () => {
    console.log("Server running on port", port);
  })
);
