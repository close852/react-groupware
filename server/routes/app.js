import express from 'express'
import appDAO from '../dao/appDAO'
import {
    requireRole
} from '../utils/roleUtils'

const router = express.Router();

//결재문서 조회시 버튼에 대한 권한, 수정가능 여부
router.get('/:id', async (req, res) => {
    const {
        id
    } = req.params;

    const result = await appDAO.findAppById(id);

    return res.json({
        data: result
    })
})

//결재문서 상신, copy기안, 임시저장
router.post('/', async (req, res) => {

});

// 결재액션(사용자 & 액션) &  ** 결재를 진행시키는 후처리 프로세스 별도로 필요함.
router.put('/:id', async (req, res) => {
    
})




export default router;