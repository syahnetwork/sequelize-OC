/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dc_summary_item_map', {
    dc_summary_event_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dc_computed_event',
        key: 'dc_summary_event_id'
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
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'dc_summary_item_map'
  });
};
