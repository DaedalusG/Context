'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    topic: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    }
  }, {});
  Article.associate = function (models) {
    // associations can be defined here
    Article.belongsTo(models.User, { foreignKey: "userId" });
    Article.hasMany(models.Comment, { foreignKey: "articleId" });
    Article.hasMany(models.Like, { foreignKey: "articleId" });
  };
  return Article;
};