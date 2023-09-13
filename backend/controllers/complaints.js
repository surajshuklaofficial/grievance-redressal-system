import Complaint from "../models/complaint.js";

export const sendComplaint = async (req, res) => {
    try {
        const complaint = new Complaint(req.body);
        await complaint.save();
        res.status(200).json(complaint);
    } catch (error) {
        console.error('Error saving complaint:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const fetchComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find({ departmentId: req.params.departmentID }).sort({ "timestamps.createdAt": 1 });
        res.status(200).json(complaints);
    } catch (error) {
        console.error('Error fetching complaints:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
