const appContainer = require('./src/container');
const app = appContainer.resolve('app');

app
  .start()
  .catch((error) => {
    app.logger.error(error.stack);
    process.exit();
  });