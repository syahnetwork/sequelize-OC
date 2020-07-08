/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dataset_crf_version_map', {
    dataset_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dataset',
        key: 'dataset_id'
      }
    },
    event_definition_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'event_definition_crf',
        key: 'event_definition_crf_id'
      }
    }
  }, {
    tableName: 'dataset_crf_version_map'
  });
};
