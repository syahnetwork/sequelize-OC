/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rule_set', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rule_expression_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    study_event_definition_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    item_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    run_schedule: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    run_time: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'rule_set'
  });
};
