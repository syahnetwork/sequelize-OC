/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oc_qrtz_job_details', {
    job_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    job_group: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    job_class_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_durable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    requests_recovery: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    job_data: {
      type: "BYTEA",
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
    }
  }, {
    tableName: 'oc_qrtz_job_details'
  });
};
