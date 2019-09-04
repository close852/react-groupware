import db from '../lib/db'

let getUserById = async (username, password) => {
    let sql = `SELECT * FROM USER WHERE username = ? and password = ?`;
    let args = [username, password];

    try {
        return db.query(sql, args).catch(err => err);
    } catch (err) {
        return err;
    }
}
let insertUser = async (username, password) => {
    let sql = `INSERT INTO USER (USERNAME, PASSWORD)  VALUES ( ? , ? )`;
    let args = [username, password];

    try {
        return db.query(sql, args).catch(err => err);
    } catch (err) {
        return err;
    }
}

export default ({
    getUserById,
    insertUser
})