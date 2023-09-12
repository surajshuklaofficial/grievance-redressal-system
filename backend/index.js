import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// initiating server
const server = express();

// connection with DATABASE
mongoose.connect(process.env.DB_CONNECT_URL);

server.use('/', (req, res) => {
    res.status(200).send('Welcome to the backend of Grievance management System.');   
})

server.listen(process.env.PORT, () => {
    console.log('listening on port: ' + process.env.PORT);   
});