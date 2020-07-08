/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usage_statistics_data', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    param_key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    param_value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    update_timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'usage_statistics_data'
  });
};
