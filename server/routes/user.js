import express from 'express'
import userDAO from '../dao/userDAO'
import {
    requireRole
} from '../utils/roleUtils'

const router = express.Router();

router.post('/login', async (req, res) => {
    const {
        username,
        password
    } = req.body;
    
    const result = await userDAO.getUserById(username, password);

    return res.json({
        data: result
    })
})

router.post('/signup', async (req, res) => {
    const {
        username,
        password
    } = req.body;

    const result = await userDAO.insertUser(username, password);

    return res.json({
        data: result
    })
})

export default router;