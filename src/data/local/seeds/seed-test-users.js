'use strict';

const dataFaker = require('src/core/support/dataFaker');

module.exports = {
  up: function (queryInterface) {
    const testUsers = [];

    for(let i = 0; i < 20; i++) {
      testUsers.push({
        name: dataFaker.name(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return queryInterface.bulkInsert('client', testUsers, {});
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('client', null, {});
  }
};
