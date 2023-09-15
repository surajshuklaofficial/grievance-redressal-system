import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import  {
  authRouter,
  nlpRouter,
  complaintsRouter,
  userRouter,
  departmentRouter,
  resolverRouter
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
server.use('/api/v1/resolver', resolverRouter);

// Greet routes
server.use('/api/v1/greet', (req, res) => res.status(200).json({message:"Hi! Greivance Bot this side. I am specially design to help you in lodging your complaint without any hustle."}));
server.use('/api/v1', (req, res) => res.send("Version-1 of Greivance Redressal Central Server is deployed. \n Enter your Comlaint:"));
server.use('/', (req, res) => res.send("Welcome to Greivance Redressal Central Server!"));

const port = process.env.PORT || 5050;
server.listen(port, () => {
  console.log("listening on port: " + port);
});
