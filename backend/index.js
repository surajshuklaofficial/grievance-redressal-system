import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import { authRouter, nlpRouter, complaintsRouter, userRouter, homepageRouter } from './routes/index.js';
import authentication from './middlerware/authentication.js';

dotenv.config();

// initiating server
const server = express();

// built-in middlewares at application level
server.use(cors())
server.use(express.json());

// connection with DATABASE
mongoose.connect(process.env.DB_CONNECT_URL)
    .then(() => console.log('Connected to database.'))
    .catch(err => console.log(err));

// routes
server.use('/api/v1/user/auth', authRouter);
server.use('/api/v1/user', userRouter);
server.use('/api/v1/nlp', nlpRouter);
// server.use('/api/v1/:department/admin', departmentalDashboardRouter);
server.use('/api/v1/complaints', complaintsRouter);

// Greet route
server.use('/api/v1', homepageRouter);

server.listen(process.env.PORT, () => {
    console.log('listening on port: ' + process.env.PORT);   
}); 