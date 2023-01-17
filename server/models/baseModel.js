const db = require('../config/database');

function post(database, record) {
    const keys = Object.keys(record);
    const values = Object.values(record);
    const length = keys.length;

    return db.execute(`INSERT INTO ${database} (${keys}) VALUES (${Array(length).fill('?')})`, values)
}

function put(database, record, id) {
    const keys = Object.keys(record).map(key => `${key} = ?`);
    const values = Object.values(record);

    return db.execute(`UPDATE ${database} SET ${keys} WHERE ID = ?`, [...values, id]);
}

function getAll(database, columns = '*') {
    if (Array.isArray(columns)) {
        columns = columns.toString();
    }
    return db.execute(`SELECT ${columns} FROM ${database}`);
}

function findByColumn(database, id, columnName) {
    return db.execute(`SELECT * FROM ${database} WHERE ${columnName} = ?`, [id]);
}

function DELETE(database, id) {
    return db.execute(`DELETE FROM ${database} WHERE ID = ?`, [id]);
}

module.exports = {
    post,
    put,
    getAll,
    findByColumn,
    DELETE
}