/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authorities', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(authorities_id_seq::regclass)'
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    authority: {
      type: DataTypes.STRING,
      allowNull: false
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'authorities'
  });
};
