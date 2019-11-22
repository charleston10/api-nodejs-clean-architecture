const { asClass, asFunction, asValue } = require('awilix');
const { scopePerRequest } = require('awilix-express');

const Server = require('../../core/http/Server');
const router = require('../../core/http/router');
const loggerMiddleware = require('../../core/http/logging/loggerMiddleware');
const errorHandler = require('../../core/http/errors/errorHandler');
const devErrorHandler = require('../../core/http/errors/devErrorHandler');
const swaggerMiddleware = require('../../core/http/swagger/swaggerMiddleware');
const logger = require('../../core/logging/logger');
const config = require('../../../config');

module.exports = {
  configContainer: {
    config: asValue(config)
  },
  httpContainer: {
    server: asClass(Server).singleton(),
    router: asFunction(router).singleton(),
    logger: asFunction(logger).singleton(),
  },
  middlewareContainer: function (container) {
    return {
      loggerMiddleware: asFunction(loggerMiddleware).singleton(),
      containerMiddleware: asValue(scopePerRequest(container)),
      errorHandler: asValue(config.production ? errorHandler : devErrorHandler),
      swaggerMiddleware: asValue([swaggerMiddleware])
    };
  }
};