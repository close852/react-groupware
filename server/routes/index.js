import express from 'express';
import user from './user'
import app from './app'
import bbs from './bbs'
import article from './article'
import sample from './sample'
import { requireRole } from '../utils/roleUtils'
const router = express.Router();


router.use('/user', user);
router.use('/app', app);/*requireRole("USER"), */
router.use('/bbs', bbs);/*requireRole("USER"), */
router.use('/bbs/article', article);/*requireRole("USER"), */
router.use('/sample', sample);/*requireRole("USER"), */
export default router;