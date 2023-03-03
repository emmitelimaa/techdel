'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Repos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Repos.belongsTo(models.Companies);
    }
  }
  Repos.init({
    repo_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Repos',
  });
  return Repos;
};