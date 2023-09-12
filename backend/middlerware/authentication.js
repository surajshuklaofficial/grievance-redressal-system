import jwt from 'jsonwebtoken';

const authentication = (req, res, next) => {

    const token = req.headers.authorization;

    try {
        const auth = jwt.verify(token, process.env.SECRET_KEY)
        if (auth) {
            next();
        } else {
            res.sendStatus(401);
        }

    } catch (err) {
        res.status(401).json({ error: err });
    }
}

export default authentication;