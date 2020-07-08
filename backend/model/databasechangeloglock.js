/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('databasechangeloglock', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    locked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    lockgranted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lockedby: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'databasechangeloglock'
  });
};
