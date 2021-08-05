import { createUser, fetchUser } from '../models/user.model.js';
import bcrypt from 'bcrypt';
import commonResponse from '../common/index.js';
const signupUser = (req, res) => {
    bcrypt.hash(req.body.password, 12).then((hash) => {
        let user = { ...req.body, password: hash };
        createUser(req.connection, user, (err, result) => {
            commonResponse({
                res,
                success: err ? false : true,
                message: err ? 'user not created' : 'user created',
                data: null,
            });
        });
    });
};
const getUser = (req, res) => {
    fetchUser(req.connection, req.params.id, (err, users) => {
        commonResponse({
            res,
            success: err ? false : true,
            message: err ? 'user not found' : 'user fetched succesfully',
            data: users,
        });
    });
};

export { signupUser, getUser };
