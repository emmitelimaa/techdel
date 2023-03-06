'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.addColumn(
        "Repos", // name of Source model
        "company_id", // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: "Companies", // name of Target model
            key: "company_id", // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        }
      );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      "Repos", // name of Source model
      "company_id" // key we want to remove
    );
  }
};
