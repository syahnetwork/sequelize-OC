/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dc_substitution_event', {
    dc_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item',
        key: 'item_id'
      }
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'dc_substitution_event'
  });
};
