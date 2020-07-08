/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dc_section_event', {
    dc_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'dc_section_event'
  });
};
