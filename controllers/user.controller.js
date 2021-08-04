import createUser from '../models/user.model.js';

const signupUser = (req, res) => {
    createUser(req.connection, req.body, (err, result) => {
        !err
            ? res.send({ sucess: true, message: 'User Created' })
            : res.send({ sucess: false, message: 'User Not Created' });
    });
};

export default signupUser;
