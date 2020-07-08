/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rule_action_run', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    administrative_data_entry: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    initial_data_entry: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    double_data_entry: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    import_data_entry: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    batch: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    not_started: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    scheduled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    data_entry_started: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    skipped: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    stopped: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'rule_action_run'
  });
};
