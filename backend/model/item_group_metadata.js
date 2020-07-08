/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_group_metadata', {
    item_group_metadata_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'item_group',
        key: 'item_group_id'
      }
    },
    header: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subheader: {
      type: DataTypes.STRING,
      allowNull: true
    },
    layout: {
      type: DataTypes.STRING,
      allowNull: true
    },
    repeat_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repeat_max: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repeat_array: {
      type: DataTypes.STRING,
      allowNull: true
    },
    row_start_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'crf_version',
        key: 'crf_version_id'
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'item',
        key: 'item_id'
      }
    },
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    borders: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    show_group: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    repeating_group: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    tableName: 'item_group_metadata'
  });
};
