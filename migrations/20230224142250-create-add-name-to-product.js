'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'name', {
      allowNull: false,
      type: Sequelize.TEXT('medium')
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'name');
  }
};