'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
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
      state: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: [
          'PendingProductRegistration','PendingProductEnrollments','WaitingPayment','Finished'
        ]
      },
      totalCost: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};