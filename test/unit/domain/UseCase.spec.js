const { expect } = require('chai');
const UseCase = require('src/domain/UseCase');

describe('Domain :: UseCase', () => {
  var CustomUseCase;

  beforeEach(() => {
    CustomUseCase = class CustomUseCase extends UseCase { };
    CustomUseCase.setOutputs(['SUCCESS']);
  });

  describe('#on', () => {
    context('when added handler for a valid output', () => {
      it('does not throw', () => {
        const useCase = new CustomUseCase();

        expect(() => {
          useCase.on(useCase.outputs.SUCCESS, () => { });
        }).to.not.throw;
      });
    });

    context('when added handler for a invalid output', () => {
      it('does not throw', () => {
        const useCase = new CustomUseCase();

        expect(() => {
          useCase.on('INVALID', () => { });
        }).to.throw(Error, /Invalid output "INVALID" to UseCase CustomUseCase/);
      });
    });
  });
});