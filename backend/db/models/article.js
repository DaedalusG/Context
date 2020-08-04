'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    topic: DataTypes.STRING,
    body: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Article.associate = function (models) {
    // associations can be defined here
    Article.belongsTo(models.User, { foreignKey: "userId" });
    Article.hasMany(models.Comment, { foreignKey: "articleId" });
    Article.hasMany(models.Like, { foreignKey: "articleId" });
  };
  return Article;
};