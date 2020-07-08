/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resolution_status', {
    resolution_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'resolution_status'
  });
};
