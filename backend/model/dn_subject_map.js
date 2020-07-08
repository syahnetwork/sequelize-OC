/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dn_subject_map', {
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'subject',
        key: 'subject_id'
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
    tableName: 'dn_subject_map'
  });
};
