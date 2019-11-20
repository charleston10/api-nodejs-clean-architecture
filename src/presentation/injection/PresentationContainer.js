
const { asValue } = require('awilix');
const UserSerializer = require('../user/UserSerializer');

module.exports = {
    userSerializer: asValue(UserSerializer)
}