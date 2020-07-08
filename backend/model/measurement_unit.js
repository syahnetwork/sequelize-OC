/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('measurement_unit', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    oc_oid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'measurement_unit'
  });
};
