"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Cart_item, {
        foreignKey: "user_id",
        as: "Cart_item",
      });
      User.hasMany(models.Order, {
        foreignKey: "user_id",
        as: "Order",
      });
    }
  }
  User.init(
    {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      email: DataTypes.STRING(50),
      password: DataTypes.STRING,
      name: DataTypes.STRING(50),
      phone: DataTypes.STRING(15),
      role: DataTypes.ENUM("Admin", "Customer"),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
