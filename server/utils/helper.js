const jwt = require('jwt-simple');
const { JWT_SECRET_KEY } = require('../config/index');

module.exports.tokenGenrator = (user) => {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, JWT_SECRET_KEY);
}