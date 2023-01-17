const bcrypt = require('bcrypt');
const baseModel = require('./baseModel');
const { databases } = require('../helpers/utils');

async function register(userData) {
    if (userData.password.length < 6) {
        return new Promise(function () {
            throw new Error('Password should be at least 6 characters');
        });
    }

    if (!/^[a-zA-Z0-9]+$/g.test(userData.password)) {
        return new Promise(function () {
            throw new Error('Password must contains only latin letters and digits');
        });
    }

    const foundUsers = await baseModel.findByColumn(databases.USERS, userData.username, 'username');

    if (foundUsers[0].length) {
        return new Promise(function () {
            throw new Error('This username is already registered');
        });
    }

    userData.password = await bcrypt.hash(userData.password, 10);

    return baseModel.post(databases.USERS, userData);
}

async function login(username) {
    return baseModel.findByColumn(databases.USERS, username, 'username');
}

module.exports = {
    register,
    login
}
