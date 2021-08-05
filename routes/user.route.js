import express from 'express';
import { signupUser, getUser } from '../controllers/user.controller.js';
const router = express.Router();

router.post('/signup', signupUser);
router.get('/getuser/:id', getUser);
export default router;
