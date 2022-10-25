'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.belongsTo(models.User, {
        foreignKey: "ownerId"
      })
      Spot.hasMany(models.SpotImage, {
        foreignKey: "spotId"
      })
      Spot.hasMany(models.Booking, {
        foreignKey: "spotId"
      })
      Spot.hasMany(models.Review, {
        foreignKey: "spotId"
      })
    }
  }
  Spot.init({
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: {
      type: DataTypes.DECIMAL,
      validate: {
        hasSevenDecimals(value) {
          let arr = value.split('.');
          if (arr[1].length !== 7) throw new Error ('There must be 7 decimals for a valid latitude/longtitude coordinate')
        }
      }
    },
    lng: {
      type: DataTypes.DECIMAL,
      validate: {
        hasSevenDecimals(value) {
          let arr = value.split('.');
          if (arr[1].length !== 7) throw new Error ('There must be 7 decimals for a valid latitude/longtitude coordinate')
        }
      }
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};