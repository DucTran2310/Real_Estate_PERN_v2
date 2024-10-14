'use strict';
const { enumData: { pricingsData } } = require('../utils/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pricings', pricingsData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pricings', null, {});
  }
};