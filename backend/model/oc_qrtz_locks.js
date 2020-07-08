/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oc_qrtz_locks', {
    lock_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    sched_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'TestScheduler',
      primaryKey: true
    }
  }, {
    tableName: 'oc_qrtz_locks'
  });
};
