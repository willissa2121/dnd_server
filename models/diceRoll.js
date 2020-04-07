module.exports = (sequelize, DataTypes) => {
  var basic = sequelize.define(
    "diceRoll",
    {
      roller: { type: DataTypes.STRING, allowNull: false },
      val: { type: DataTypes.INTEGER, allowNull: false },

    },
    {
      freezeTableName: true
    }
  );

  return basic;
};
