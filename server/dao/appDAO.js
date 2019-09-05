import db from '../lib/db'

let findAppById = async (app_id) => {
    let sql = `SELECT * FROM APP WHERE app_id = ?`;
    let args = [app_id];

    try {
        return db.query(sql, args).catch(err => err);
    } catch (err) {
        return err;
    }
}
let insertApp = async (username, password) => {
    let sql = `INSERT INTO APP (app_id,)  VALUES ( nextval(mw_seq), ? )`;
    let args = [username, password];

    try {
        return db.query(sql, args).catch(err => err);
    } catch (err) {
        return err;
    }
}

export default ({
    findAppById,
    insertApp
})