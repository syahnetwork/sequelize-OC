/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dn_event_crf_map', {
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'event_crf',
        key: 'event_crf_id'
      }
    },
    discrepancy_note_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'discrepancy_note',
        key: 'discrepancy_note_id'
      }
    },
    column_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dn_event_crf_map'
  });
};
