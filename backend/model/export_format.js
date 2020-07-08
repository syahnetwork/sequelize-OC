/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('export_format', {
    export_format_id: {
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
    },
    mime_type: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'export_format'
  });
};
