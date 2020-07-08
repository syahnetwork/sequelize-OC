/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dyn_item_group_metadata', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_group_metadata_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    item_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    show_group: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'dyn_item_group_metadata'
  });
};
