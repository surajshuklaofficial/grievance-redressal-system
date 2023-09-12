export const NLP = (req, res) => {
    console.log(req.body.complaintDescription);

    res.status(200).json([
        {department: 'Electric', accuracy: 76},
        {department: 'Water', accuracy: 15},
        {department: 'Electric', accuracy: 9},
    ])
}
