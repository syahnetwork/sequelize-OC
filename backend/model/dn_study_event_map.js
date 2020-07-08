/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dn_study_event_map', {
    study_event_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study_event',
        key: 'study_event_id'
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
    tableName: 'dn_study_event_map'
  });
};
