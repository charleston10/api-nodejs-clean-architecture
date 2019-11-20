const { expect } = require('chai');
const UserSerializer = require('src/presentation/user/UserSerializer');
const UserModel = require('src/domain/user/model/UserModel');

describe('Presentation :: HTTP :: User :: UserSerializer', () => {
  it('returns id and name', () => {
    const serializedUser = UserSerializer.serialize({
      id: 123,
      name: 'The User'
    });

    expect(serializedUser).to.eql({
      id: 123,
      name: 'The User'
    });
  });

  it('ignores extra attributes', () => {
    const serializedUser = UserSerializer.serialize({
      id: 321,
      name: 'The User',
      unknown: 'Hello!'
    });

    expect(serializedUser).to.eql({
      id: 321,
      name: 'The User'
    });
  });

  it('is able to serialize user entity instances', () => {
    const user = new UserModel({ id: 1, name: 'User :)' });
    const serializedUser = UserSerializer.serialize(user);

    expect(serializedUser).to.eql({
      id: 1,
      name: 'User :)'
    });
  });
});