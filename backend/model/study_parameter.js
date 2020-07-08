/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('study_parameter', {
    study_parameter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    handle: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    default_value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inheritable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    overridable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'study_parameter'
  });
};
