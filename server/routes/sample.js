import express from 'express'
import sampleDAO from '../dao/sampleDAO'
import {
    requireRole
} from '../utils/roleUtils'

const router = express.Router();

router.get('/', async (req, res) => {
    /*    const {// form-data
        } = req.body;
        const { // /:id
        } = req.params;
    */
    const idx = 1;
    const result = await sampleDAO.findSampleById(idx);
    return res.json({
        data: result
    })
})


export default router;