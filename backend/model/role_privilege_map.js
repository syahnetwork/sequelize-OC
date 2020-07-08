/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role_privilege_map', {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_role',
        key: 'role_id'
      }
    },
    priv_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'privilege',
        key: 'priv_id'
      }
    },
    priv_value: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'role_privilege_map'
  });
};
