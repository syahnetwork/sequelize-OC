/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit_event', {
    audit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    audit_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    audit_table: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reason_for_change: {
      type: DataTypes.STRING,
      allowNull: true
    },
    action_message: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'audit_event'
  });
};
