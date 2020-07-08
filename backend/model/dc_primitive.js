/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dc_primitive', {
    dc_primitive_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    decision_condition_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'decision_condition',
        key: 'decision_condition_id'
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item',
        key: 'item_id'
      }
    },
    dynamic_value_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item',
        key: 'item_id'
      }
    },
    comparison: {
      type: DataTypes.STRING,
      allowNull: false
    },
    constant_value: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dc_primitive'
  });
};
