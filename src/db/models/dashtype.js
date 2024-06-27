'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DashType extends Model {
    static associate(models) {}
  };
  DashType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DashType',
  });
  return DashType;
};
