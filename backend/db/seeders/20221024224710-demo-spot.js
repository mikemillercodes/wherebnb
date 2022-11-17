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
      address: 'Demo: 12 Maple Lane',
      city: 'Demo1: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'NEW SKI IN/OUT Luxury Designed',
      description: 'A taste of suburbia',
      price: '812.00'
    },
    {
      ownerId: 2,
      address: 'Mike: 123 Maple Lane',
      city: 'Mike2: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234245,
      lng: -120.1234245,
      name: 'Luxury 3BR Chalet',
      description: 'A taste of suburbia',
      price: '880.00'
    },
    {
      ownerId: 3,
      address: 'Chris: 124 Maple Lane',
      city: 'Chris3: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'The Blackcomb Lookout',
      description: 'A taste of suburbia',
      price: '803.00'
    },
    {
      ownerId: 4,
      address: 'Matt: 124 Maple Lane',
      city: 'Matt4: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Renovated 4 BD Village Townhome',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 5,
      address: 'Gray: 124 Maple Lane',
      city: 'Gray5: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 1,
      address: 'Demo: 124 Maple Lane',
      city: 'Demo6: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 2,
      address: 'Mike: 124 Maple Lane',
      city: 'Mike7: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 3,
      address: 'Chris: 124 Maple Lane',
      city: 'Chris8: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 4,
      address: 'Matt: 124 Maple Lane',
      city: 'Matt9: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 5,
      address: 'Gray: 124 Maple Lane',
      city: 'Gray10: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 1,
      address: 'Demo: 124 Maple Lane',
      city: 'Demo11: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 2,
      address: 'Mike: 124 Maple Lane',
      city: 'Mike12: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 3,
      address: 'Chris: 124 Maple Lane',
      city: 'Chris13: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 4,
      address: 'Matt: 124 Maple Lane',
      city: 'Matt14: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 5,
      address: 'Gray: 124 Maple Lane',
      city: 'Gray15: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 1,
      address: 'Demo: 124 Maple Lane',
      city: 'Demo16: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 2,
      address: 'Mike: 124 Maple Lane',
      city: 'Mike17: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 3,
      address: 'Chris: 124 Maple Lane',
      city: 'Chris18: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 4,
      address: 'Matt: 124 Maple Lane',
      city: 'Matt19: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 5,
      address: 'Gray: 124 Maple Lane',
      city: 'Gray20: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 1,
      address: 'Demo: 124 Maple Lane',
      city: 'Demo21: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 2,
      address: 'Mike: 124 Maple Lane',
      city: 'Mike22: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 3,
      address: 'Chris: 124 Maple Lane',
      city: 'Chris23: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
    },
    {
      ownerId: 4,
      address: 'Matt: 124 Maple Lane',
      city: 'Matt24: Whisler',
      state: 'British Columbia',
      country: 'Canada',
      lat: 120.1234242,
      lng: -120.1234242,
      name: 'Luxury 3 Bedroom Family Retreat',
      description: 'A taste of suburbia',
      price: '828.00'
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
    await queryInterface.bulkDelete('Spots', {
      ownerId: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    })
  }
};
