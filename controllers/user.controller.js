import { createUser, fetchUser, updateUser } from '../models/user.model.js';
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
const editUser = (req, res) => {
    updateUser(req.connection, req.body, req.body.email, (err, users) => {
        commonResponse({
            res,
            success: !users.affectedRows > 0 ? false : true,
            message:
                !users.affectedRows > 0 ? 'user not found' : 'user updated',
            data: null,
        });
    });
};
const deleteUser = (req, res) => {
    let user = { ...req.body, activestatus: 0 };
    updateUser(req.connection, user, req.body.email, (err, users) => {
        commonResponse({
            res,
            success: !users.affectedRows > 0 ? false : true,
            message:
                !users.affectedRows > 0 ? 'user not found' : 'user deleted',
            data: null,
        });
    });
};
export { signupUser, deleteUser, getUser, editUser };
