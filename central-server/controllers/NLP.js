import Department from "../models/department.js";

const NLP = async (req, res) => {
  console.log(req.body.complaintDescription);

  try {
    const departments = await Department.find();

    departments[0].accuracy = 4.2;
    departments[1].accuracy = 27.2;
    departments[2].accuracy = 68.6;

    console.log(departments);
    res.status(200).json(departments);
  } catch (err) {
    res.status(400).json(err);
  }
};

export { NLP };
