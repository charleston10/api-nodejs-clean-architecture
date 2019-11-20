const { expect } = require('chai');
const UserModel = require('src/domain/user/model/UserModel');
const UserMapper = require('src/data/local/entities/mappers/UserMapper');

describe('Data :: User :: UserMapper', () => {
  describe('.toEntity', () => {
    it('returns user instance with passed attributes', () => {
      const mockedSequelizeUser = {
        dataValues: {
          id: 1,
          name: 'The Name'
        }
      };

      const entity = UserMapper.toModel(mockedSequelizeUser);

      expect(entity).to.be.instanceOf(UserModel);
      expect(entity.id).to.equal(1);
      expect(entity.name).to.equal('The Name');
    });
  });

  describe('.toDatabase', () => {
    it('returns user object prepared to be persisted', () => {
      const user = new UserModel({
        name: 'Some User'
      });

      const dbUser = UserMapper.toEntity(user);

      expect(dbUser.name).to.equal('Some User');
      expect(dbUser).to.have.all.keys('name');
    });
  });
});