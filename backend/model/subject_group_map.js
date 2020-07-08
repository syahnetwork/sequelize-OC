/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subject_group_map', {
    subject_group_map_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    study_group_class_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study_group_class',
        key: 'study_group_class_id'
      }
    },
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study_subject',
        key: 'study_subject_id'
      }
    },
    study_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study_group',
        key: 'study_group_id'
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
    date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'subject_group_map'
  });
};
