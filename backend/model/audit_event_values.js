/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit_event_values', {
    audit_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'audit_event',
        key: 'audit_id'
      }
    },
    column_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    old_value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    new_value: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'audit_event_values'
  });
};
