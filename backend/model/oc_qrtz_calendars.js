/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oc_qrtz_calendars', {
    calendar_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    calendar: {
      type: "BYTEA",
      allowNull: false
    },
    sched_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'TestScheduler',
      primaryKey: true
    }
  }, {
    tableName: 'oc_qrtz_calendars'
  });
};
