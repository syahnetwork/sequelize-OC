/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dc_event', {
    dc_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    decision_condition_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'decision_condition',
        key: 'decision_condition_id'
      }
    },
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'dc_event'
  });
};
