/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit_log_event', {
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
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'user_id'
      }
    },
    entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    entity_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reason_for_change: {
      type: DataTypes.STRING,
      allowNull: true
    },
    audit_log_event_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    old_value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    new_value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    study_event_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    event_crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    item_data_repeat_key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    instance_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    details: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'audit_log_event'
  });
};
