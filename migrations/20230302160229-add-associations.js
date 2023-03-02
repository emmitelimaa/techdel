'use strict';

//In this file we create the "queries"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "Repos", //Name of source model
      "company_id", //Name of key we are adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Companies", //name of target model
          key: "company_id", //key in target model we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      "Companies",
      "company_id"
    )
  }
};
