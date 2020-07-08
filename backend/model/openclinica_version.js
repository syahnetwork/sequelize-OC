/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('openclinica_version', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    build_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    update_timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'openclinica_version'
  });
};
