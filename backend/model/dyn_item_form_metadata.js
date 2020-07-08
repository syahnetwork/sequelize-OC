/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dyn_item_form_metadata', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_form_metadata_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    show_item: {
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
    },
    item_data_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passed_dde: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'dyn_item_form_metadata'
  });
};
