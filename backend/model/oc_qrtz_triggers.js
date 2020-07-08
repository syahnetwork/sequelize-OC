/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oc_qrtz_triggers', {
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
    next_fire_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    prev_fire_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trigger_state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trigger_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_time: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    end_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    calendar_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    misfire_instr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    job_data: {
      type: "BYTEA",
      allowNull: true
    },
    sched_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'TestScheduler',
      primaryKey: true,
      references: {
        model: 'oc_qrtz_job_details',
        key: 'sched_name'
      }
    }
  }, {
    tableName: 'oc_qrtz_triggers'
  });
};
