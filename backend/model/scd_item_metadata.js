/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scd_item_metadata', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    scd_item_form_metadata_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item_form_metadata',
        key: 'item_form_metadata_id'
      }
    },
    control_item_form_metadata_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item_form_metadata',
        key: 'item_form_metadata_id'
      }
    },
    control_item_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    option_value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'scd_item_metadata'
  });
};
