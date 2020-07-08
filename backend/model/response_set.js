/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('response_set', {
    response_set_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    response_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'response_type',
        key: 'response_type_id'
      }
    },
    label: {
      type: DataTypes.STRING,
      allowNull: true
    },
    options_text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    options_values: {
      type: DataTypes.STRING,
      allowNull: true
    },
    version_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'response_set'
  });
};
