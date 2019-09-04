import express from 'express'
import articleDAO from '../dao/articleDAO'
import {
    requireRole
} from '../utils/roleUtils'

const router = express.Router();

/**
 * 
 */
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


//게시판 조회
router.get('/:id', async (req, res) => {
    const {
        id
    } = req.params;
    const {
        orderBy,
        sortType,
        pageSize,
        page
    } = req.query;
    console.log('req.params >>>>> ', req.params)
    const paging = {
        orderBy,
        sortType,
        startWith: (Number(page) - 1) * pageSize,
        pageSize
    }
    const result = await articleDAO.findAllArticleByBbsId(id, paging);
    return res.json({
        data: result
    })
})


export default router;