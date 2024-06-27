'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diet extends Model {
    static associate(models) {}
  };
  Diet.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diet',
  });
  return Diet;
};
