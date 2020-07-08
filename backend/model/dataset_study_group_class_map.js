/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dataset_study_group_class_map', {
    dataset_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dataset',
        key: 'dataset_id'
      }
    },
    study_group_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'study_group_class',
        key: 'study_group_class_id'
      }
    }
  }, {
    tableName: 'dataset_study_group_class_map'
  });
};
