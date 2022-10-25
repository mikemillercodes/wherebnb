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
   await queryInterface.bulkInsert('Spots', [
    {
      ownerId: 1,
      address: '12 Maple Lane',
      city: 'Mission Viejo',
      state: 'California',
      country: 'United States',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Millerhouse',
      description: 'A taste of suburbia',
      price: '149.99'
    },
    {
      ownerId: 2,
      address: '123 Maple Lane',
      city: 'Mission Viejo',
      state: 'California',
      country: 'United States',
      lat: 120.1234245,
      lng: -120.1234245,
      name: 'Pahtyhaus',
      description: 'A taste of suburbia',
      price: '149.99'
    },
    {
      ownerId: 3,
      address: '124 Maple Lane',
      city: 'Mission Viejo',
      state: 'California',
      country: 'United States',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Brio Circle',
      description: 'A taste of suburbia',
      price: '149.99'
    },
    {
      ownerId: 4,
      address: '125 Maple Lane',
      city: 'Mission Viejo',
      state: 'California',
      country: 'United States',
      lat: 120.1234243,
      lng: -120.1234243,
      name: 'Countryside Estates',
      description: 'A taste of suburbia',
      price: '149.99'
    },
    {
      ownerId: 5,
      address: '12 Maple Lane',
      city: 'Mission Viejo',
      state: 'California',
      country: 'United States',
      lat: 120.1234244,
      lng: -120.1234244,
      name: 'Pacific Hills',
      description: 'A taste of suburbia',
      price: '149.99'
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Spots', {
      ownerId: [1, 2, 3, 4, 5]
    })
  }
};
