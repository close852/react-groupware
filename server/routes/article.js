import express from 'express'
import articleDAO from '../dao/articleDAO'
import {
    requireRole
} from '../utils/roleUtils'

const router = express.Router();

/**
 * 게시글 조회
 */
router.get('/:id', async (req, res) => {
    const {
        id
    } = req.params;
    const result = await articleDAO.findArticleById(id);
    return res.json({
        data: result
    })
})


/**
 * 게시글 조회
 */
router.delete('/:id', async (req, res) => {
    const {
        id
    } = req.params;
    const result = await articleDAO.deleteArticleById(id);
    return res.json({
        data: result
    })
})

/**
 * 게시글 등록
 */
router.post('/', async (req, res) => {
    const {
        title,
        content,
        bbsId,
        userId
    } = req.body;

    const { // /:id
    } = req.params;
    console.log('req.body > ', req.body)
    const idx = 1;
    const result = await articleDAO.insertArticle(title, content, bbsId, userId);
    return res.json({
        data: result
    })
})
/**
 * 게시글 수정
 */
router.put('/:id', async (req, res) => {
    const {
        title,
        content,
        user_id,
        indent,
        ref_article_id,
        sortno,
        bbs_id,
        article_id
    } = req.body;

    const { // /:id
        id
    } = req.params;

    const params = {
        title,
        content,
        bbs_id,
        user_id,
        indent,
        ref_article_id,
        sortno
    };

    const result = await articleDAO.updateDynamicArticle(params, id);
    return res.json({
        data: result
    })
})


export default router;