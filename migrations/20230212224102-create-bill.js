'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bills', {
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
      orderId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
      state: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: [
          'Pending', 'WaitingPayment', 'Paid', 'Finished'
        ]
      },
      cost: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bills');
  }
};