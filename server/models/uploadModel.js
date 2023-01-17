const { databases } = require('../helpers/utils');
const baseModel = require('./baseModel');

function post(record) {
    return baseModel.post(databases.UPLOADS, record);
}

function getAll() {
    return baseModel.getAll(databases.UPLOADS);
}

function findById(id) {
    return baseModel.findByColumn(databases.UPLOADS, id, 'ID');
}

function DELETE(id) {
    return baseModel.DELETE(databases.UPLOADS, id);
}

module.exports = {
    post,
    getAll,
    findById,
    DELETE
}