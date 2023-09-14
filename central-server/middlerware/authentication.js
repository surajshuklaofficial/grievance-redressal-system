import jwt from "jsonwebtoken";

const authentication = (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) {
    return res.status(202).json({ message: "Acess Denied" });
  }
  if (token.startsWith("Bearer ")) token = token.split(" ")[1];

  try {
    const auth = jwt.verify(token, process.env.SECRET_KEY);
    if (auth) {
      req.user = auth;
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.status(401).json({ error: err });
  }
};

export default authentication;
