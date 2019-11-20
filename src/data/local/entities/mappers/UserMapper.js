const UseModel = require('../../../../domain/user/model/UserModel');

const UserMapper = {
  toModel({ dataValues }) {
    const { id, name } = dataValues;

    return new UseModel({ id, name });
  },

  toEntity(survivor) {
    const { name } = survivor;

    return { name };
  }
};

module.exports = UserMapper;
