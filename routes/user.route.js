import express from 'express';
import {
    signupUser,
    getUser,
    editUser,
    deleteUser,
    hardDeleteUser,
    signInUser,
} from '../controllers/user.controller.js';
import authenticate from '../middlewares/authentication.js';
const router = express.Router();

router.post('/signup', signupUser);
router.get('/getUser/:id', authenticate, getUser);
router.put('/editUser', authenticate, editUser);
router.put('/deleteUser', authenticate, deleteUser);
router.delete('/hardDeleteUser', authenticate, hardDeleteUser);
router.post('/signIn', signInUser);

export default router;
