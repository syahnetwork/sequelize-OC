/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_data', {
    item_data_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'item',
        key: 'item_id'
      },
      unique: true
    },
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'event_crf',
        key: 'event_crf_id'
      }
    },
    value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_account',
        key: 'user_id'
      }
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    instance_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'item_data'
  });
};
