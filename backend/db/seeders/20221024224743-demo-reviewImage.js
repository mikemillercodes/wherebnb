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
   await queryInterface.bulkInsert('ReviewImages', [
    {
      reviewId: 1,
      url: 'image1.jpg',
    },
    {
      reviewId: 1,
      url: 'image2.jpg',
    },
    {
      reviewId: 2,
      url: 'image3.jpg',
    },
    {
      reviewId: 2,
      url: 'image4.jpg',
    },   
    {
      reviewId: 3,
      url: 'image5.jpg',
    },    
    {
      reviewId: 3,
      url: 'image6.jpg',
    },    
    {
      reviewId: 4,
      url: 'image7.jpg',
    },
    {
      reviewId: 4,
      url: 'image8.jpg',
    },
    {
      reviewId: 5,
      url: 'image9.jpg',
    },
    {
      reviewId: 5,
      url: 'image10.jpg',
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
    await queryInterface.bulkDelete('ReviewImages', {
      url: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg']
    })
  }
};
