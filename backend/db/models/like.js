'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    articleId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    }
  }, {});
  Like.associate = function (models) {
    // associations can be defined here
    Like.belongsTo(models.User, { foreignKey: "userId" });
    Like.belongsTo(models.Article, { foreignKey: "articleId" })
  };
  return Like;
};