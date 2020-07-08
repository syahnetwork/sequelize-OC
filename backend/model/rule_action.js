/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rule_action', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rule_set_rule_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    action_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expression_evaluates_to: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email_to: {
      type: DataTypes.STRING,
      allowNull: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    rule_action_run_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oc_oid_reference: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email_subject: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'rule_action'
  });
};
