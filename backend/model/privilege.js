/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('privilege', {
    priv_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    priv_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    priv_desc: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'privilege'
  });
};
