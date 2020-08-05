'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      body: {
        allowNull: false,
        type: Sequelize.STRING(5000)
      },
      userId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
        references: { model: "Users" }
      },
      articleId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
        references: { model: "Articles" }
      },
      commentId: {
        type: Sequelize.INTEGER,
        references: { model: "Comments" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comments');
  }
};