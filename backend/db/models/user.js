'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    email: DataTypes.STRING,
    profilePicUrl: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Article, { foreignKey: "userId" });
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.hasMany(models.Like, { foreignKey: "userId" });
  };
  return User;
};