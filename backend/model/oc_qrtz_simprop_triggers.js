/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oc_qrtz_simprop_triggers', {
    sched_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'oc_qrtz_triggers',
        key: 'sched_name'
      }
    },
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
    str_prop_1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    str_prop_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    str_prop_3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    int_prop_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    int_prop_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    long_prop_1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    long_prop_2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dec_prop_1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dec_prop_2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    bool_prop_1: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bool_prop_2: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'oc_qrtz_simprop_triggers'
  });
};
