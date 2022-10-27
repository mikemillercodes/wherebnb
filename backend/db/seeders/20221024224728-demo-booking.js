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
        spotId: 1,
        userId: 2,
        startDate: '2021-01-01',
        endDate: '2021-01-03'
      },
      {
        spotId: 2,
        userId: 3,
        startDate: '2020-01-01',
        endDate: '2020-01-03'
      },
      {
        spotId: 3,
        userId: 4,
        startDate: '2019-01-01',
        endDate: '2019-01-03'
      },
      {
        spotId: 4,
        userId: 5,
        startDate: '2018-01-01',
        endDate: '2018-01-03'
      },
      {
        spotId: 5,
        userId: 1,
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
