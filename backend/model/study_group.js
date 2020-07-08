/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('study_group', {
    study_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    study_group_class_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study_group_class',
        key: 'study_group_class_id'
      }
    }
  }, {
    tableName: 'study_group'
  });
};
