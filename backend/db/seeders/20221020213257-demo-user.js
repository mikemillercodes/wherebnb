'use strict';
const bcrypt = require('bcryptjs')
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
   return queryInterface.bulkInsert('Users', [
    {
      username: 'Demo-lition',
      email: 'demo@user.io',
      firstName: 'Demo',
      lastName: 'UserLName',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      username: 'Mike Milla',
      email: 'mike@milla.com',
      firstName: "Mike",
      lastName: 'Milla',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      username: 'Chris Cohen',
      email: 'chris@cohen.com',
      firstName: "Chris",
      lastName: 'Cohen',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      username: 'Matt Kleinsmith',
      email: 'matt@kleinsmith.com',
      firstName: "Matt",
      lastName: 'Kleinsmith',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      username: 'Gray Nance',
      email: 'gray@nance.com',
      firstName: "Gray",
      lastName: 'Nance',
      hashedPassword: bcrypt.hashSync('password')
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
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      firstName: ['Demo', 'Mike', 'Chris', 'Matt', 'Gray']
    })
  }
};
