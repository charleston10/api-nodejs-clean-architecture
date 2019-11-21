# Node API Clean Architecture

APIs focused on separation of concerns and scalability with Clean Architecture

- **Multilayer folder structure:**
Code organization inspired by DDD and Clean Architecture focused on codebase scalability.

- **Scalable and easy to use web server:**
Use Express for requests routing and middlewares. There are some essential middlewares for web APIs already setup, like body-parser, compression, CORS and method-override.

- **Database integration:**
Sequelize, an ORM for SQL databases, is already integrated, you just have to set the authentication configurations.

- **Prepared for testing:**
The test suite uses Mocha/Chai and is prepared to run unit, integration and functional tests right from the beginning. There are helpers to make it easy to make requests to the web app during the tests and for cleaning the database after each test. A FactoryGirl adapter for Sequelize is setup to make your tests DRY as well, and the tests generate code coverage measurement with Istanbul. You should read about the Chai plugins that are setup by default too.

- **Dependency injection:**
With Awilix, a practical dependency injection library, the code will not be coupled and it'll still be easy to resolve automatically the dependencies on the runtime and mock them during the tests. It's even possible inject dependencies on your controllers with the Awilix Express adapter. Click here if you want to read more about how to use dependency injection with this boilerplate.

- **Logging:**
The Log4js logger is highly pluggable, being able to append the messages to a file during the development and send them to a logging service when on production. Even the requests (through morgan) and queries will be logged.

- **Linter:**
It's also setup with ESLint to make it easy to ensure a code styling and find code smells.

- **CLI integration:**
Both the application and Sequelize have command-line tools to make it easy to work with them. Check the Scripts section to know more about this feature.

## Scripts

This boilerplate comes with a collection of npm scripts to make your life easier, you'll run them with `npm run <script name>` or `yarn run <script name>`:

- `dev`: Run the application in development mode
- `start` Run the application in production mode (prefer not to do that in development) 
- `test`: Run the test suite
- `test:http`: Run only the http tests
- `test:unit`: Run only the unit tests of all layers
- `test:data:unit`: Run only the unit tests of layer data
- `test:domain:unit`: Run only the unit tests of layer domain
- `coverage`: Run only the unit tests and generate code coverage for them, the output will be on `coverage` folder
- `lint`: Lint the codebase
- `sequelize`: Alias to the [Sequelize CLI](https://github.com/sequelize/cli)
- `console`: Open the built-in console, you can access the DI container through the `container` variable once it's open, the console is promise-friendly.

## Layers

- **Presentation:**
Layer to manage initial data access through Routes and Controllers

- **Domain:**
Layer to manage business rules using UseCase propagating events through broadcasts (EventEmitter)

- **Data:**
Layer for integrade access data using Repository and DataSource in local database or cloud

See more clean architecture [reference](https://www.linkedin.com/posts/charlestonanjos_clean-architecture-para-humanos-na-pr%C3%A1tica-activity-6589474515837833216-_dfe)

## Quick start

_Notice that the project comes with a small application for user management already, you can delete it with a npm script after you understand how the project works but please do the quick start first!_ 😊

1. Clone the repository with `git clone --depth=1 https://github.com/charleston10/api-nodejs-clean-architecture`
2. Setup the database on `config/database.js` (there's an example file there to be used with PostgreSQL 😉 )
3. Install the dependencies with `npm` (click here if [you don't have Npm installed](https://www.npmjs.com/get-npm))
4. Create the development and test databases you have setup on `config/database.js`
5. Run the database migrations with `npm run sequelize db:migrate`
6. Add some seed data to the development database with `npm run sequelize db:seed:all`
7. Run the application in development mode with `npm run dev`
8. Access `http://localhost:3000/api/users` and you're ready to go!
9. Access `http://localhost:3000/api/docs` for you see docs with swagger


## Dependencies

- [Node v7.6+](http://nodejs.org/)
- [Express](https://npmjs.com/package/express)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Awilix](https://www.npmjs.com/package/awilix)
- [Structure](https://www.npmjs.com/package/structure)
- [HTTP Status](https://www.npmjs.com/package/http-status)
- [Log4js](https://www.npmjs.com/package/log4js)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Express Status Monitor](https://www.npmjs.com/package/express-status-monitor)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [PM2](https://www.npmjs.com/package/pm2)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)
- [FactoryGirl](https://www.npmjs.com/package/factory-girl)
- [Istanbul](https://www.npmjs.com/package/istanbul) + [NYC](https://www.npmjs.com/package/nyc)
- [ESLint](https://www.npmjs.com/package/eslint)

## Special thanks

Culture for innovation time in my project [TraceFacil](www.tracefacil.com)
and inspired in [boilerplate](https://github.com/talyssonoc/node-api-boilerplate/) nodejs