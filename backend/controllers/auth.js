import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/user.js';

export const signin = async(req, res, next) => {
    const bcryptRounds = 12;

    try {
        let user = await User.findOne({email: req.body.email});
        if (user) { 
            res.status(409).json({message: "User already exists"});
            return;
        }

        user = new User(req.body);
        user.password = bcrypt.hashSync(req.body.password, bcryptRounds);
        const token = jwt.sign(req.body.email, process.env.SECRET_KEY);
        await user.save();
        res.status(201).json({token});
        
    } catch (err) { 
        console.log(err);
        res.sendStatus(500);
    }
}

export const signup = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return; // Exit the function
        }

        const isAuth = bcrypt.compareSync(req.body.password, user.password);

        if (isAuth) {
            const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);
            user.save();
            res.status(200).json({ token });
        } else {
            res.sendStatus(401);
        }

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}