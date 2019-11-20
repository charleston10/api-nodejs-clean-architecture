const { attributes } = require('structure');

const UserModel = attributes({
  id: Number,
  name: {
    type: String,
    required: true
  }
})(class UserModel {});

module.exports = UserModel;
