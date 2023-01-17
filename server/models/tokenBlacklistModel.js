const { databases } = require('../helpers/utils');
const baseModel = require('./baseModel');

function registerToken(token) {
    return baseModel.post(databases.BLACKLIST_TOKENS, {token});
}

function findToken(token) {
    return baseModel.findByColumn(databases.BLACKLIST_TOKENS, token, 'token');
}

module.exports = {
    registerToken,
    findToken
}