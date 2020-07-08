/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oc_qrtz_blob_triggers', {
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
    blob_data: {
      type: "BYTEA",
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
    tableName: 'oc_qrtz_blob_triggers'
  });
};
