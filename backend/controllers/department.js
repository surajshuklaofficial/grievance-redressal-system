import Department from '../models/department.js';

export const addNewDepartment = async (req, res) => {

    try {
        const department = new Department(req.body);
        await department.save();

        res.status(200).json(department);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const greet = async (req, res) => {
    res.send('Hello!')
}

