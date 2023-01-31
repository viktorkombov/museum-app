const { databases } = require('../helpers/utils');
const baseModel = require('./baseModel');

function post(record) {
    return baseModel.post(databases.POSTS, record);
}

function put(record, id) {
    return baseModel.put(databases.POSTS, record, id);
}

function getAll() {
    return baseModel.getAll(databases.POSTS);
}

function getSpecificColumns(columns, orderBy, limit, dir, notEqualTo) {
    return baseModel.getAll(databases.POSTS, columns, orderBy, limit, dir, notEqualTo);
}

function findById(id) {
    return baseModel.findByColumn(databases.POSTS, id, 'ID');
}

function DELETE(id) {
    return baseModel.DELETE(databases.POSTS, id);
}

module.exports = {
    post,
    put,
    getAll,
    findById,
    DELETE,
    getSpecificColumns
}