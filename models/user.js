module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {}
  User.init(
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue:"Singh"
        // allowNull defaults to true
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
