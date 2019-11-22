module.exports = {
  development: {
    host: 'localhost',
    dialect: 'postgres',
    database: 'charleston-dev',
    user: 'postgres',
    password: '123456789',
    pool: {
      max: 1,
      min: 0,
      idle: 10000
    }
  },
  test: {
    host: 'localhost',
    dialect: 'postgres',
    database: 'charleston-test',
    user: 'postgres',
    password: '123456789',
    pool: {
      max: 1,
      min: 0,
      idle: 10000
    }
  },
  production: {
    host: 'localhost',
    dialect: 'postgres',
    database: 'charleston-api-clean',
    user: 'postgres',
    password: '123456789',
    pool: {
      max: 9,
      min: 0,
      idle: 10000
    }
  }
};