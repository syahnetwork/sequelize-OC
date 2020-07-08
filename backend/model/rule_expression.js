/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rule_expression', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    },
    context: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    }
  }, {
    tableName: 'rule_expression'
  });
};
