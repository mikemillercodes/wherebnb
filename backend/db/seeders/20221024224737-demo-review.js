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
   await queryInterface.bulkInsert('Reviews', [
    {
      spotId: 1,
      userId: 2,
      review: 'Fames ac turpis egestas sed tempus. Augue mauris augue neque gravida in fermentum. Vel orci porta non pulvinar neque laoreet suspendisse. Adipiscing bibendum est ultricies integer. Ut eu sem integer vitae justo.',
      stars: 5
    },
    {
      spotId: 2,
      userId: 3,
      review: 'Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Id interdum velit laoreet id donec ultrices.',
      stars: 5
    },
    {
      spotId: 3,
      userId: 4,
      review: 'Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nibh praesent tristique magna sit amet purus.',
      stars: 3
    },
    {
      spotId: 4,
      userId: 5,
      review: 'Lectus sit amet est placerat in egestas erat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ',
      stars: 1
    },
    {
      spotId: 5,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 6,
      userId: 2,
      review: 'Fames ac turpis egestas sed tempus. Augue mauris augue neque gravida in fermentum. Vel orci porta non pulvinar neque laoreet suspendisse. Adipiscing bibendum est ultricies integer. Ut eu sem integer vitae justo.',
      stars: 5
    },
    {
      spotId: 7,
      userId: 3,
      review: 'Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Id interdum velit laoreet id donec ultrices.',
      stars: 5
    },
    {
      spotId: 8,
      userId: 4,
      review: 'Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nibh praesent tristique magna sit amet purus.',
      stars: 3
    },
    {
      spotId: 9,
      userId: 5,
      review: 'Lectus sit amet est placerat in egestas erat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ',
      stars: 1
    },
    {
      spotId: 10,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 11,
      userId: 2,
      review: 'Fames ac turpis egestas sed tempus. Augue mauris augue neque gravida in fermentum. Vel orci porta non pulvinar neque laoreet suspendisse. Adipiscing bibendum est ultricies integer. Ut eu sem integer vitae justo.',
      stars: 5
    },
    {
      spotId: 12,
      userId: 3,
      review: 'Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Id interdum velit laoreet id donec ultrices.',
      stars: 5
    },
    {
      spotId: 13,
      userId: 4,
      review: 'Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nibh praesent tristique magna sit amet purus.',
      stars: 3
    },
    {
      spotId: 14,
      userId: 5,
      review: 'Lectus sit amet est placerat in egestas erat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ',
      stars: 1
    },
    {
      spotId: 15,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 16,
      userId: 2,
      review: 'Fames ac turpis egestas sed tempus. Augue mauris augue neque gravida in fermentum. Vel orci porta non pulvinar neque laoreet suspendisse. Adipiscing bibendum est ultricies integer. Ut eu sem integer vitae justo.',
      stars: 5
    },
    {
      spotId: 17,
      userId: 3,
      review: 'Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Id interdum velit laoreet id donec ultrices.',
      stars: 5
    },
    {
      spotId: 18,
      userId: 4,
      review: 'Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nibh praesent tristique magna sit amet purus.',
      stars: 3
    },
    {
      spotId: 19,
      userId: 5,
      review: 'Lectus sit amet est placerat in egestas erat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ',
      stars: 1
    },
    {
      spotId: 20,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },   {
      spotId: 1,
      userId: 2,
      review: 'Fames ac turpis egestas sed tempus. Augue mauris augue neque gravida in fermentum. Vel orci porta non pulvinar neque laoreet suspendisse. Adipiscing bibendum est ultricies integer. Ut eu sem integer vitae justo.',
      stars: 5
    },
    {
      spotId: 2,
      userId: 3,
      review: 'Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Id interdum velit laoreet id donec ultrices.',
      stars: 5
    },
    {
      spotId: 3,
      userId: 4,
      review: 'Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nibh praesent tristique magna sit amet purus.',
      stars: 3
    },
    {
      spotId: 4,
      userId: 5,
      review: 'Lectus sit amet est placerat in egestas erat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ',
      stars: 1
    },
    {
      spotId: 5,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 6,
      userId: 2,
      review: 'Fames ac turpis egestas sed tempus. Augue mauris augue neque gravida in fermentum. Vel orci porta non pulvinar neque laoreet suspendisse. Adipiscing bibendum est ultricies integer. Ut eu sem integer vitae justo.',
      stars: 5
    },
    {
      spotId: 7,
      userId: 3,
      review: 'Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Id interdum velit laoreet id donec ultrices.',
      stars: 5
    },
    {
      spotId: 8,
      userId: 4,
      review: 'Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nibh praesent tristique magna sit amet purus.',
      stars: 3
    },
    {
      spotId: 9,
      userId: 5,
      review: 'Lectus sit amet est placerat in egestas erat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ',
      stars: 1
    },
    {
      spotId: 10,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 11,
      userId: 2,
      review: 'Fames ac turpis egestas sed tempus. Augue mauris augue neque gravida in fermentum. Vel orci porta non pulvinar neque laoreet suspendisse. Adipiscing bibendum est ultricies integer. Ut eu sem integer vitae justo.',
      stars: 5
    },
    {
      spotId: 12,
      userId: 3,
      review: 'Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Id interdum velit laoreet id donec ultrices.',
      stars: 5
    },
    {
      spotId: 13,
      userId: 4,
      review: 'Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nibh praesent tristique magna sit amet purus.',
      stars: 3
    },
    {
      spotId: 14,
      userId: 5,
      review: 'Lectus sit amet est placerat in egestas erat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ',
      stars: 1
    },
    {
      spotId: 15,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 16,
      userId: 2,
      review: 'Fames ac turpis egestas sed tempus. Augue mauris augue neque gravida in fermentum. Vel orci porta non pulvinar neque laoreet suspendisse. Adipiscing bibendum est ultricies integer. Ut eu sem integer vitae justo.',
      stars: 5
    },
    {
      spotId: 17,
      userId: 3,
      review: 'Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Id interdum velit laoreet id donec ultrices.',
      stars: 5
    },
    {
      spotId: 18,
      userId: 4,
      review: 'Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nibh praesent tristique magna sit amet purus.',
      stars: 3
    },
    {
      spotId: 19,
      userId: 5,
      review: 'Lectus sit amet est placerat in egestas erat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ',
      stars: 1
    },
    {
      spotId: 20,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },   {
      spotId: 1,
      userId: 2,
      review: 'Fames ac turpis egestas sed tempus. Augue mauris augue neque gravida in fermentum. Vel orci porta non pulvinar neque laoreet suspendisse. Adipiscing bibendum est ultricies integer. Ut eu sem integer vitae justo.',
      stars: 5
    },
    {
      spotId: 2,
      userId: 3,
      review: 'Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Id interdum velit laoreet id donec ultrices.',
      stars: 5
    },
    {
      spotId: 3,
      userId: 4,
      review: 'Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nibh praesent tristique magna sit amet purus.',
      stars: 3
    },
    {
      spotId: 4,
      userId: 5,
      review: 'Lectus sit amet est placerat in egestas erat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ',
      stars: 1
    },
    {
      spotId: 5,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 6,
      userId: 2,
      review: 'Fames ac turpis egestas sed tempus. Augue mauris augue neque gravida in fermentum. Vel orci porta non pulvinar neque laoreet suspendisse. Adipiscing bibendum est ultricies integer. Ut eu sem integer vitae justo.',
      stars: 5
    },
    {
      spotId: 7,
      userId: 3,
      review: 'Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Id interdum velit laoreet id donec ultrices.',
      stars: 5
    },
    {
      spotId: 8,
      userId: 4,
      review: 'Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nibh praesent tristique magna sit amet purus.',
      stars: 3
    },
    {
      spotId: 9,
      userId: 5,
      review: 'Lectus sit amet est placerat in egestas erat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ',
      stars: 1
    },
    {
      spotId: 10,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 11,
      userId: 2,
      review: 'Fames ac turpis egestas sed tempus. Augue mauris augue neque gravida in fermentum. Vel orci porta non pulvinar neque laoreet suspendisse. Adipiscing bibendum est ultricies integer. Ut eu sem integer vitae justo.',
      stars: 5
    },
    {
      spotId: 12,
      userId: 3,
      review: 'Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Id interdum velit laoreet id donec ultrices.',
      stars: 5
    },
    {
      spotId: 13,
      userId: 4,
      review: 'Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nibh praesent tristique magna sit amet purus.',
      stars: 3
    },
    {
      spotId: 14,
      userId: 5,
      review: 'Lectus sit amet est placerat in egestas erat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ',
      stars: 1
    },
    {
      spotId: 15,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 16,
      userId: 2,
      review: 'Fames ac turpis egestas sed tempus. Augue mauris augue neque gravida in fermentum. Vel orci porta non pulvinar neque laoreet suspendisse. Adipiscing bibendum est ultricies integer. Ut eu sem integer vitae justo.',
      stars: 5
    },
    {
      spotId: 17,
      userId: 3,
      review: 'Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Id interdum velit laoreet id donec ultrices.',
      stars: 5
    },
    {
      spotId: 18,
      userId: 4,
      review: 'Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nibh praesent tristique magna sit amet purus.',
      stars: 3
    },
    {
      spotId: 19,
      userId: 5,
      review: 'Lectus sit amet est placerat in egestas erat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ',
      stars: 1
    },
    {
      spotId: 20,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 21,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 22,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 23,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
    },
    {
      spotId: 24,
      userId: 1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.',
      stars: 3
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
    await queryInterface.bulkDelete('Reviews', {
      spotId: [1, 2, 3, 4, 5]
    })
  }
};
