/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rule_action_stratification_factor', {
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
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rule_expression_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'rule_action_stratification_factor'
  });
};
