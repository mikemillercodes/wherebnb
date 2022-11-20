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
    await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },


      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: false,
      },

      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/929d9509-07ac-4ae9-99eb-dceb6982b81a.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/0bd85d16-0979-460e-bc5d-6f15f380e782.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/dc2b7786-4031-4590-9800-6cfba7d68d13.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/2c3d7922-8181-4424-838d-e1fec2df550f.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/a93eb4b4-8fa2-4597-87e4-65fa250f5394.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/929d9509-07ac-4ae9-99eb-dceb6982b81a.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/0bd85d16-0979-460e-bc5d-6f15f380e782.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/dc2b7786-4031-4590-9800-6cfba7d68d13.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/2c3d7922-8181-4424-838d-e1fec2df550f.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50807944/original/354b0c01-81f7-4545-a54a-90932bf47ade.jpeg?im_w=960',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/5f721fb5-d2ed-4a80-9b4c-fd793f8e7233.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50807944/original/bf532c9d-76ed-4eb3-93bb-7598c1e9eac2.jpeg?im_w=480',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/08afc535-95d6-4e90-ad78-e2f36566f023.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50807944/original/0cad81bf-1931-4832-9f78-e500542d930f.jpeg?im_w=480',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/9fbf0fd7-5f69-43cd-a349-914ef08b2428.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/921ab554-8757-4442-9185-278217821a41.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/e874f50e-8eb3-4631-908a-7a350b73fa90.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/a1932b40-0e39-4a0d-8109-33687f9d5243.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/f2446745-98f2-4869-98f8-5d3f2ad90fbf.jpg?im_w=480',
        preview: false,
      },

      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-748889289947319148/original/530856d3-0c83-4906-9c6c-de50e7f385d1.jpeg?im_w=720',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/80669db4-360e-40b8-87ce-c6d003aecef3.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/56a0ce27-d505-4a4d-9fa6-38290fe87065.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/41b5c1e0-92a3-4f58-b65d-928a9e744bdc.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/d27dac84-7352-4d3e-8b66-441ef10d29da.jpg?im_w=480',
        preview: false,
      },

      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/2c6d4cfd-16c2-4b80-be3a-2a821f439467.jpg?im_w=960',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/b73fa40e-0683-4988-991f-e316b956da9c.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/6fbf0827-50bb-4578-a2b2-da83cc4b810c.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/5e227842-1380-42cc-854f-f87add50fcac.jpg?im_w=480',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/53481e6a-62b5-4634-a959-8fdac9768455.jpg?im_w=480',
        preview: false,
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
    await queryInterface.bulkDelete('SpotImages', {
      url: ['url1.com', 'url2.com', 'url3.com', 'url4.com', 'url5.com', 'url12.com', 'url22.com', 'url32.com', 'url42.com', 'url52.com']
    })
  }
};
