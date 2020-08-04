'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    articleId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.hasMany(models.Comment, { foreignKey: "commentId" });
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Article, { foreignKey: "articleId" });
    Comment.belongsTo(models.Comment, { foreignKey: "commentId" })
  };
  return Comment;
};