/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('versioning_map', {
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'crf_version',
        key: 'crf_version_id'
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item',
        key: 'item_id'
      }
    },
    form_layout_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'form_layout',
        key: 'form_layout_id'
      },
      unique: true
    },
    item_order_in_form: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'versioning_map'
  });
};
