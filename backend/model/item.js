/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item', {
    item_id: {
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
    units: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phi_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    item_data_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item_data_type',
        key: 'item_data_type_id'
      }
    },
    item_reference_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item_reference_type',
        key: 'item_reference_type_id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'status',
        key: 'status_id'
      }
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_account',
        key: 'user_id'
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
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oc_oid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    brief_description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'item'
  });
};
