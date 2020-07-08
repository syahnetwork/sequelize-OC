/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oc_qrtz_fired_triggers', {
    entry_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    trigger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trigger_group: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instance_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fired_time: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    job_group: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_stateful: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    requests_recovery: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_nonconcurrent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_update_data: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sched_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'TestScheduler',
      primaryKey: true
    },
    sched_time: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'oc_qrtz_fired_triggers'
  });
};
