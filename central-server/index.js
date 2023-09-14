import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import  {
  authRouter,
  nlpRouter,
  complaintsRouter,
  userRouter,
  departmentRouter
} from "./routes/index.js";

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
server.use('/api/v1/user/auth', authRouter);
server.use('/api/v1/user', userRouter);
server.use('/api/v1/nlp', nlpRouter);
server.use('/api/v1/department', departmentRouter);
server.use('/api/v1/complaints', complaintsRouter);

// Greet routes
server.use('/api/v1', (req, res) => res.send("Version-1 of Greivance Redressal Central Server is deployed"));
server.use('/', (req, res) => res.send("Welcome to Greivance Redressal Central Server!"));

const port = process.env.PORT || 5050;
server.listen(port, () => {
  console.log("listening on port: " + port);
});
