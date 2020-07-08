/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('study_subject', {
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    label: {
      type: DataTypes.STRING,
      allowNull: true
    },
    secondary_label: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'subject',
        key: 'subject_id'
      }
    },
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study',
        key: 'study_id'
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
    enrollment_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_updated: {
      type: DataTypes.DATE,
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
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oc_oid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    time_zone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_account',
        key: 'user_id'
      }
    },
    user_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'study_subject'
  });
};
