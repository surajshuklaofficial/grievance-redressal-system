import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { authRoutes } from './routes/index.js';

dotenv.config();

// initiating server
const server = express();

// built-in middlewares at application level
server.use(express.json());

// connection with DATABASE
mongoose.connect(process.env.DB_CONNECT_URL);

// complainant routes
server.use('/complainant/auth', authRoutes);

// greet route
server.use('/', (req, res) => {
    res.status(200).send('Welcome to the backend of Grievance management System.');   
})




server.listen(process.env.PORT, () => {
    console.log('listening on port: ' + process.env.PORT);   
});