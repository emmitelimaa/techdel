'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
    queryInterface.addColumn(
      "Repos", 
      "team_name", 
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    ),
    queryInterface.addColumn(
      "Repos", 
      "technology", 
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    ),
  ]);
},
  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Repos', 'repo_name'),
      queryInterface.removeColumn('Repos', 'team_name'),
      queryInterface.removeColumn('Repos', 'technology'),
    ]);
  }
};
