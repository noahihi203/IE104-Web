"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Product, {
        foreignKey: "pd_id",
        as: "Product",
      });
    }
  }
  Image.init(
    {
      image_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      image: {
        allowNull: false,
        type: DataTypes.BLOB,
      },
      pd_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Product",
          key: "pd_id",
        },
      },
    },
    {
      sequelize,
      modelName: "Image",
    }
  );
  return Image;
};
