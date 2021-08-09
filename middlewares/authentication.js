import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authenticate = (req, res, next) => {
    let token = req.headers.authorization;
    if (typeof token !== 'undefined') {
        let finalToken = token.split(' ');
        jwt.verify(finalToken[1], process.env.SECRET_KEY, (err, user) => {
            if (!err) {
                req.user = user;
                next();
            } else {
                res.send({ success: false, message: 'Unauthorized' });
            }
        });
    }
};
export default authenticate;
