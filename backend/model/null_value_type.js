/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('null_value_type', {
    null_value_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    definition: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'null_value_type'
  });
};
