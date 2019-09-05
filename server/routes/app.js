import express from 'express'
import appDAO from '../dao/appDAO'
import {
    requireRole
} from '../utils/roleUtils'
import { paging } from '../utils/pageUtils'

import { draft } from '../lib/appProcess';
const router = express.Router();

//결재문서 조회시 버튼에 대한 권한, 수정가능 여부
router.get('/todolist', async (req, res) => {
    const {
        order,
        sortType,
        size,
        page,
        user_id
    } = req.query;
    const pages = paging(order, sortType, size, page);

    const result = await appDAO.findAllTodoList(user_id, pages);

    return res.json({
        data: result
    })
})

//결재문서 조회시 버튼에 대한 권한, 수정가능 여부
router.get('/processlist', async (req, res) => {
    const {
        order,
        sortType,
        size,
        page,
        user_id
    } = req.query;
    const pages = paging(order, sortType, size, page);

    const result = await appDAO.findAllProcessList(user_id, pages);

    return res.json({
        data: result
    })
})
//결재문서 조회시 버튼에 대한 권한, 수정가능 여부
router.get('/endlist', async (req, res) => {
    const {
        order,
        sortType,
        size,
        page,
        user_id
    } = req.query;
    const pages = paging(order, sortType, size, page);

    const result = await appDAO.findAllEndList(user_id, pages);

    return res.json({
        data: result
    })
})

//결재문서 상신, copy기안, 임시저장
router.post('/', async (req, res) => {
    const {
        title,
        content,
        user_id,
        action
    } = req.body;
    let app_line = [
        { auth_id: 1, auth_type: 'USER', action_type: 'APP', app_status: 'READY', taskno: 1, sortno: 1 },
        { auth_id: 1, auth_type: 'USER', action_type: 'APP', app_status: 'READY', taskno: 1, sortno: 2 }
    ]

    const appData = {
        title,
        action,
        content,
        user_id,
        app_line
    }
    // console.log(app_line[0])
    draft(appData);
    return res.json({
        data: app_line
    })
});

// 결재액션(사용자 & 액션) &  ** 결재를 진행시키는 후처리 프로세스 별도로 필요함.
router.put('/:id', async (req, res) => {

})


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


export default router;