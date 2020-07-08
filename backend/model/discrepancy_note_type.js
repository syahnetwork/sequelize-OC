/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discrepancy_note_type', {
    discrepancy_note_type_id: {
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
    tableName: 'discrepancy_note_type'
  });
};
