'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Bookings', [
      {
        startDate: '2021-01-01',
        endDate: '2021-01-03'
      },
      {
        startDate: '2020-01-01',
        endDate: '2020-01-03'
      },
      {
        startDate: '2019-01-01',
        endDate: '2019-01-03'
      },
      {
        startDate: '2018-01-01',
        endDate: '2018-01-03'
      },
      {
        startDate: '2017-01-01',
        endDate: '2017-01-03'
      },

    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bookings', {
      startDate: ['2021-01-01', '2020-01-01', '2019-01-01', '2018-01-01', '2017-01-01']
    })
  }
};
