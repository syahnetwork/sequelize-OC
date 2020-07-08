/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dc_computed_event', {
    dc_summary_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dc_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dc_event',
        key: 'dc_event_id'
      }
    },
    item_target_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    summary_type: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dc_computed_event'
  });
};
