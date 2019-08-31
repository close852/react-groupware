import express from 'express';
import user from './user'
import { requireRole } from '../utils/roleUtils'
const router = express.Router();


router.use('/user', user);

export default router;