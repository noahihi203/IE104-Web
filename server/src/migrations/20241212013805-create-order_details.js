"use strict";

//const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("order_details", {
      pd_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "products",
          key: "pd_id",
        },
      },
      order_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "orders",
          key: "order_id",
        },
      },
      amount: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      pd_cost: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      payment_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "payments",
          key: "payment_id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("order_details");
  },
};
