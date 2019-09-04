import express from 'express'
import articleDAO from '../dao/articleDAO'
import bbsDAO from '../dao/bbsDAO'

import {
    requireRole
} from '../utils/roleUtils'

const router = express.Router();

/**
 * 전체 게시판 조회
 */
router.get('/', async (req, res) => {
    /*    const {// form-data
        } = req.body;
        const { // /:id
        } = req.params;
    */
    const result = await bbsDAO.findAllBbs();
    return res.json({
        data: result
    })
})

//게시판 조회
router.get('/:id', async (req, res) => {
    const {
        id
    } = req.params;
    // console.log('req.params >>>>> ', req.params)
    const result = await bbsDAO.findBbsById(id);
    return res.json({
        data: result
    })
})




export default router;