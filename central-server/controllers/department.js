import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import Department from "../models/department.js";
import Complaint from '../models/complaint.js';
import Resolver from '../models/resolver.js';

export const registerNewDepartment = async (req, res) => {
    const bcryptRounds = 12;

    try {
        let department = await Department.findOne({department: req.body.department});
        if (department) { 
            res.status(409).json({message: "Department already exists"});
            return;
        }

        department = new Department(req.body);
        department.password = bcrypt.hashSync(req.body.password, bcryptRounds);
        const token = jwt.sign(req.body.department, process.env.SECRET_KEY);
        await department.save();
        res.status(201).json({token, department: department.department, departmentID: department._id});
        
    } catch (err) { 
        console.log(err);
        res.sendStatus(500);
    }
}

export const loginDepartment = async (req, res) => {
    try {
        const department = await Department.findOne({ _id: req.body.departmentID });

        if (!department) {
            res.status(404).json({ message: "Department not found" });
            return; // Exit the function
        }

        const isAuth = bcrypt.compareSync(req.body.password, department.password);

        if (isAuth) {
            const token = jwt.sign({ departmendID: department._id }, process.env.SECRET_KEY);
            department.save();
            res.status(200).json({token, department: department.department, departmentID: department._id});
        } else {
            res.sendStatus(401);
        }

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const fetchComplaintsByDepartment = async (req, res) => {
    try {
        
        const complaints = await Complaint.find({ departmentId: req.params.departmentID, resolutionStatus: req.query.status }).sort({ "timestamps.createdAt": 1 });
        res.status(200).json(complaints);
    } catch (error) {
        console.error('Error fetching complaints:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const fetchComplaintsCountByDepartment = async (req, res) => {
    try {
        
        const RECEIVED_COUNT = await Complaint.countDocuments({ departmentId: req.params.departmentID, resolutionStatus: 'RECEIVED' });
        const INPROGRESS_COUNT = await Complaint.countDocuments({ departmentId: req.params.departmentID, resolutionStatus: 'INPROGRESS' });
        const CLOSED_COUNT = await Complaint.countDocuments({ departmentId: req.params.departmentID, resolutionStatus: 'CLOSED' });
        res.status(200).json({RECEIVED_COUNT, INPROGRESS_COUNT, CLOSED_COUNT});
    } catch (error) {
        console.error('Error fetching complaints:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const fetchResolvers = async (req, res) => {
    try {
        const resolvers = await Resolver.find();
        res.status(200).json(resolvers);
    } catch (error) {
        console.error('Error fetching complaints:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
