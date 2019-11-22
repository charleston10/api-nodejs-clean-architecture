const { expect } = require('chai');
const { UpdateUser } = require('src/domain/user');

describe('Domain :: User :: UpdateUser', () => {
  var updateUser;

  context('when user exists', () => {
    context('when data is valid', () => {
      before(() => {
        const MockUserRepository = {
          update: (id, data) => Promise.resolve(data)
        };

        updateUser = new UpdateUser({
          userRepository: MockUserRepository
        });
      });

      it('updates the user and emits SUCCESS', (done) => {
        const userData = { name: 'Updated User' };

        updateUser.on(updateUser.outputs.SUCCESS, (response) => {
          expect(response.name).to.equal('Updated User');
          done();
        });

        updateUser.execute(123, userData);
      });
    });

    context('when data is invalid', () => {
      before(() => {
        const MockUserRepository = {
          update: () => Promise.reject(Error('ValidationError'))
        };

        updateUser = new UpdateUser({
          userRepository: MockUserRepository
        });
      });

      it('emits VALIDATION_ERROR with the error', (done) => {
        const userData = { name: 'New User' };

        updateUser.on(updateUser.outputs.VALIDATION_ERROR, (response) => {
          expect(response.message).to.equal('ValidationError');
          done();
        });

        updateUser.execute(321, userData);
      });
    });
  });

  context('when the user does not exist', () => {
    before(() => {
      const MockUserRepository = {
        update: () => Promise.reject(new Error('NotFoundError'))
      };

      updateUser = new UpdateUser({
        userRepository: MockUserRepository
      });
    });

    it('emits NOT_FOUND with the error', (done) => {
      const userData = { name: 'New User' };

      updateUser.on(updateUser.outputs.NOT_FOUND, (response) => {
        expect(response.message).to.equal('NotFoundError');
        done();
      });

      updateUser.execute(123, userData);
    });
  });

  context('when there is an internal error', () => {
    before(() => {
      const MockUserRepository = {
        update: () => Promise.reject(new Error('Some Error'))
      };

      updateUser = new UpdateUser({
        userRepository: MockUserRepository
      });
    });

    it('emits ERROR with the error', (done) => {
      const userData = { name: 'New User' };

      updateUser.on(updateUser.outputs.ERROR, (response) => {
        expect(response.message).to.equal('Some Error');
        done();
      });

      updateUser.execute(321, userData);
    });
  });
});
