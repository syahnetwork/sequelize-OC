/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('study_group_class', {
    study_group_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_account',
        key: 'user_id'
      }
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    group_class_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'group_class_types',
        key: 'group_class_type_id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'status',
        key: 'status_id'
      }
    },
    date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subject_assignment: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'study_group_class'
  });
};
