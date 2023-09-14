const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const {
  authRouter,
  nlpRouter,
  complaintsRouter,
  userRouter,
  homepageRouter,
} = require("./routes/index.js");

dotenv.config();

// initiating server
const server = express();

// built-in middlewares at application level
server.use(cors());
server.use(express.json());

// connection with DATABASE
mongoose
  .connect(process.env.DB_CONNECT_URL)
  .then(() => console.log("Connected to database."))
  .catch((err) => console.log(err));

// routes
server.use("/api/v1/user/auth", authRouter);
server.use("/api/v1/user", userRouter);
server.use("/api/v1/nlp", nlpRouter);
// server.use('/api/v1/:department/admin', departmentalDashboardRouter);
server.use("/api/v1/complaints", complaintsRouter);

// Greet route
server.use("/api/v1", homepageRouter);

server.listen(process.env.PORT, () => {
  console.log("listening on port: " + process.env.PORT);
});
