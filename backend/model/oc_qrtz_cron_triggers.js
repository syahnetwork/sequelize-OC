/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oc_qrtz_cron_triggers', {
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
    cron_expression: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time_zone_id: {
      type: DataTypes.STRING,
      allowNull: true
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
    tableName: 'oc_qrtz_cron_triggers'
  });
};
