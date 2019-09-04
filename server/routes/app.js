import express from 'express'
import appDAO from '../dao/appDAO'
import { requireRole } from '../utils/roleUtils'


const router = express.Router();

router.post('/', async (req, res) => {
    const {
        username,
        password
    } = req.body;

    const result = await userDAO.getUserById(username, password);

    return res.json({
        data: result
    })
})

router.get('/', async (req, res) => {
    console.log('/apps');

    return res.json({
        id: 1
    })
})

router.get('/:id', async (req, res) => {
    const {
    } = req.body;
    const {
        id
    } = req.params;
    console.log('id', id);

    return res.json({
        id
    })
})

export default router;
