/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('filter', {
    filter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sql_statement: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'status',
        key: 'status_id'
      }
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'user_id'
      }
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'filter'
  });
};
