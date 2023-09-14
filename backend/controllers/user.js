import User from "../models/user.js";

const fetchUserInfo = async (req, res) => {
  try {
    const email = req.user.email;
    const user = await User.findOne({email});
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export {
  fetchUserInfo,
};
