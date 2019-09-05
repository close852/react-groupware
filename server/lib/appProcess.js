import { uuid } from '../utils/uuidUtils'
import appDAO from '../dao/appDAO'
import appLineDAO from '../dao/appLineDAO'

export function draft(appData) {
    //임시저장
    if (appData.action === "TEMPSAVE") {
        return tempsaveAction(appData);
    } else if (appData.action === "DRAFT") {
        return draftAction(appData);
    } else if (appData.action === "REDRAFT") {
        return draftAction(appData);
    }
}


export function sign(appData) {

    // SIGN, CANCEL, STOP
    afterAction();
}
export function cancel(appData) {

    // SIGN, CANCEL, STOP
    afterAction();
}


function tempsaveAction(appData) {
    console.log('tempsave', appData)
}

async function draftAction(appData) {
    //32글자
    const app_id = uuid();
    appData['app_id'] = app_id;
    appData['doc_no'] = 'MW-00000';
    //1. app 저장
    const result = await appDAO.insertApp(appData);

    //2. app_line 저장
    appData['app_line'].forEach(lineData => {
        const line_id = uuid();
        lineData['line_id'] = line_id;
        lineData['app_id'] = app_id;
        console.log('line data :: ', lineData);
        // line_id,auth_type, app_id, auth_id, taskno, sortno, action_type, app_status
        appLineDAO.insertAppLine(lineData);
        // app_meta- 다음결재자정보(end ,rcv까지..)
    });

    //3. app_box 저장
}

function afterAction() {

}