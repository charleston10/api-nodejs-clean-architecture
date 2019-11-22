const { createContainer, asClass } = require('awilix');

const presentationContainer = require('./presentation/injection/PresentationContainer');
const domainContainer = require('./domain/injection/DomainContainer');
const { repositoryContainer, localContainer } = require('./data/injection/DataContainer');
const { configContainer, httpContainer, middlewareContainer } = require('./core/injection/CoreContainer');

const Application = require('./Application');

const container = createContainer();

container
  .register({
    app: asClass(Application).singleton(),
  })
  .register(configContainer)
  .register(httpContainer)
  .register(middlewareContainer(container))
  .register(presentationContainer)
  .register(domainContainer)
  .register(localContainer)
  .register(repositoryContainer);

module.exports = container;