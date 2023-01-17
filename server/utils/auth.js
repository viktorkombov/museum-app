const jwt = require('./jwt');
const { authCookieName } = require('../app-config');
const {
    userModel,
    tokenBlacklistModel
} = require('../models');

function auth(redirectUnauthenticated = true) {

    return async function (req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];

            Promise.all([
                jwt.verifyToken(token),
                await tokenBlacklistModel.findToken(token)
            ])
                .then(([data, blacklistedToken]) => {
                    if (blacklistedToken) {
                        return Promise.reject(new Error('blacklisted token'));
                    }
                    userModel.findById(data.id)
                        .then(user => {
                            req.user = user;
                            req.isLogged = true;
                            next();
                        })
                })
                .catch(err => {
                    if (!redirectUnauthenticated) {
                        next();
                        return;
                    }
                    if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                        console.error(err);
                        res.status(401).send({ message: "Invalid token!" });
                        return;
                    }
                    next(err);
                });
        } catch (error) {
            next();
        }
    }
}

module.exports = auth;
