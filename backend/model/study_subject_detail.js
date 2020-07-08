/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('study_subject_detail', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'study_subject',
        key: 'study_subject_id'
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    first_name_for_search_use: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name_for_search_use: {
      type: DataTypes.STRING,
      allowNull: true
    },
    identifier_for_search_use: {
      type: DataTypes.STRING,
      allowNull: true
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'study_subject_detail'
  });
};
