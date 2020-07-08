/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_crf', {
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    study_event_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study_event',
        key: 'study_event_id'
      },
      unique: true
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'crf_version',
        key: 'crf_version_id'
      }
    },
    date_interviewed: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    interviewer_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    completion_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'completion_status',
        key: 'completion_status_id'
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
    annotations: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_completed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    validator_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_validate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_validate_completed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    validator_annotations: {
      type: DataTypes.STRING,
      allowNull: true
    },
    validate_string: {
      type: DataTypes.STRING,
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
      type: DataTypes.DATE,
      allowNull: true
    },
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study_subject',
        key: 'study_subject_id'
      }
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    electronic_signature_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    old_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    sdv_update_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    form_layout_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    sdv_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_last_sdv_verified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    workflow_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    removed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    archived: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'event_crf'
  });
};
