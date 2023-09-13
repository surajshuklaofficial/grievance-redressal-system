import Department from "../models/department.js";

export const NLP = async (req, res) => {
    console.log(req.body.complaintDescription);

    try {

        const departments = await Department.find();
        
        departments[0].accuracy = 90;
        departments[1].accuracy = 8;
        departments[2].accuracy = 2;
        
        console.log(departments);
        res.status(200).json(departments);
    } catch (err) {
        res.status(400).json(err);
    }
}
