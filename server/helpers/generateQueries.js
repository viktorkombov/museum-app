const db = require('../config/database');

function post(database, record) {
    const keys = Object.keys(record);
    const values = Object.values(record);

    return db.execute(`INSERT INTO ${database} (${keys}}) VALUES (${values})`)
}

function put(database, record, id) {
    const keyValues = Object.entries(record).map(v => `${v[0]} = '${v[1]}'`);

    return db.execute(`UPDATE ${database} SET ${keyValues} WHERE ID = ${id}`);
}

function getAll(database) {
    return db.execute(`SELECT * FROM ${database}`);
}

function findById(database, id) {
    return db.execute(`SELECT * FROM ${database} WHERE ID = ${id}`); 
}

module.exports = {
    post,
    put,
    getAll,
    findById
}