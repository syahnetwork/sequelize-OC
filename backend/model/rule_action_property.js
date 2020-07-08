/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rule_action_property', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rule_action_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oc_oid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rule_expression_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    property: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'rule_action_property'
  });
};
