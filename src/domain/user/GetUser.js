const UseCase = require('../UseCase');

class GetUser extends UseCase {
  constructor({ userRepository }) {
    super();
    this.userRepository = userRepository;
  }

  async execute(userId) {
    const { SUCCESS, NOT_FOUND } = this.outputs;

    try {
      const user = await this.userRepository.getById(userId);
      this.emit(SUCCESS, user);
    } catch(error) {
      this.emit(NOT_FOUND, {
        type: error.message,
        details: error.details
      });
    }
  }
}

GetUser.setOutputs(['SUCCESS', 'ERROR', 'NOT_FOUND']);

module.exports = GetUser;
