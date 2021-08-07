import express from 'express';
import {
    signupUser,
    getUser,
    editUser,
    deleteUser,
} from '../controllers/user.controller.js';
const router = express.Router();

router.post('/signup', signupUser);
router.get('/getUser/:id', getUser);
router.put('/editUser', editUser);
router.put('/deleteUser', deleteUser);
export default router;
