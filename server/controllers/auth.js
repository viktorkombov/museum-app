const {
    userModel,
    tokenBlacklistModel
} = require('../models');
const bcrypt = require('bcrypt');
const utils = require('../utils');
const uuid = require('uuid')
const { authCookieName } = require('../app-config');

const bsonToJson = (data) => { return JSON.parse(JSON.stringify(data)) };
const removePassword = (data) => {
    const { password, __v, ...userData } = data;
    return userData
}

function register(req, res, next) {
    const { username, password, name, surname } = req.body;
    const id = uuid.v4();
    
    return userModel.register({ id, username, password, name, surname }).then(registeredUser => {
        res.json(registeredUser);
    }).catch(err => {
        res.status(409)
            .send({ message: err.message })
    });
}

function login(req, res, next) {
    const { username, password } = req.body;
    console.log(req.body)

    userModel.login(username)
        .then(async foundUsers => {
            const foundUser = foundUsers[0].length ? foundUsers[0][0] : null;
            const comparison = await bcrypt.compare(password, foundUser?.password);

            return Promise.all([foundUser, foundUser ? comparison : false])
        })
        .then(([user, match]) => {
            if (!match) {
                console.log(user)
                res.status(401)
                    .send({ message: 'Wrong username or password' });
                return
            }
            user = bsonToJson(user);
            user = removePassword(user);

            const token = utils.jwt.createToken({ id: user._id });

            res.status(200)
                .send({ user, token });
        })
        .catch(next);
}

function logout(req, res) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        tokenBlacklistModel.registerToken(token)
            .then(() => {
                res.clearCookie(authCookieName)
                    .status(200)
                    .send({ message: 'Logged out!' });
            })
            .catch(err => res.send(err));
    } catch (error) {
        next();
    }
}

module.exports = {
    login,
    register,
    logout
}
