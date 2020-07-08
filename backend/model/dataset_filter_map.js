/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dataset_filter_map', {
    dataset_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dataset',
        key: 'dataset_id'
      }
    },
    filter_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'filter',
        key: 'filter_id'
      }
    },
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'dataset_filter_map'
  });
};
