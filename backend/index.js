import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import { authRoutes, nlpRoutes } from './routes/index.js';
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

// complainant routes
server.use('/user/auth', authRoutes);

// nlp routes
server.use('/nlp', authentication, nlpRoutes);

// greet route
server.use('/', (req, res) => {
    res.status(200).send('Welcome to the backend of Grievance management System.');   
})




server.listen(process.env.PORT, () => {
    console.log('listening on port: ' + process.env.PORT);   
});