/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dn_item_data_map', {
    item_data_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item_data',
        key: 'item_data_id'
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
    },
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    activated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    tableName: 'dn_item_data_map'
  });
};
