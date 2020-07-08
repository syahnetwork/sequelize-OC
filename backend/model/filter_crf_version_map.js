/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('filter_crf_version_map', {
    filter_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'filter',
        key: 'filter_id'
      }
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'crf_version',
        key: 'crf_version_id'
      }
    }
  }, {
    tableName: 'filter_crf_version_map'
  });
};
