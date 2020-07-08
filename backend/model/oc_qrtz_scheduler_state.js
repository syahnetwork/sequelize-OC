/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oc_qrtz_scheduler_state', {
    instance_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    last_checkin_time: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    checkin_interval: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sched_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'TestScheduler',
      primaryKey: true
    }
  }, {
    tableName: 'oc_qrtz_scheduler_state'
  });
};
