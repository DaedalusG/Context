'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    articleId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    commentId: {
      type: DataTypes.INTEGER
    }
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