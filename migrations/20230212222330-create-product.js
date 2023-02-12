'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      restaurantId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Restaurants',
          key: 'id',
        },
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [
          'Entry',
          'MainDish',
          'Dessert',
          'Salad',
          'Coctel',
          'Drink',
        ],
      },
      cost: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};