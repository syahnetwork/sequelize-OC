/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oc_qrtz_simple_triggers', {
    trigger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    trigger_group: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    repeat_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    repeat_interval: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    times_triggered: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sched_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'TestScheduler',
      primaryKey: true,
      references: {
        model: 'oc_qrtz_triggers',
        key: 'sched_name'
      }
    }
  }, {
    tableName: 'oc_qrtz_simple_triggers'
  });
};
