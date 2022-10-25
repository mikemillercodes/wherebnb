'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('SpotImages', [
    {
      spotId: 5,
      url: 'url5.com',
      preview: true,
    },
    {
      spotId: 4,
      url: 'url4.com',
      preview: false,
    },
    {
      spotId: 3,
      url: 'url3.com',
      preview: true,
    },
    {
      spotId: 2,
      url: 'url2.com',
      preview: false
    },
    {
      spotId: 1,
      url: 'url1.com',
      preview: true,
    },
    {
      spotId: 1,
      url: 'url12.com',
      preview: false,
    },
    {
      spotId: 2,
      url: 'url22.com',
      preview: true,
    },
    {
      spotId: 3,
      url: 'url32.com',
      preview: true,
    },
    {
      spotId: 4,
      url: 'url42.com',
      preview: true,
    },
    {
      spotId: 5,
      url: 'url52.com',
      preview: true,
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SpotImages', {
      url: ['url1.com', 'url2.com', 'url3.com', 'url4.com', 'url5.com', 'url12.com', 'url22.com', 'url32.com', 'url42.com', 'url52.com']
    })
  }
};
