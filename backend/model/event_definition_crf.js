/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_definition_crf', {
    event_definition_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    study_event_definition_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study_event_definition',
        key: 'study_event_definition_id'
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
    crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'crf',
        key: 'crf_id'
      }
    },
    required_crf: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    double_entry: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    require_all_text_filled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    decision_conditions: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    null_values: {
      type: DataTypes.STRING,
      allowNull: true
    },
    default_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    electronic_signature: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    hide_crf: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    source_data_verification_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    selected_version_ids: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    participant_form: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    allow_anonymous_submission: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    submission_url: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'event_definition_crf'
  });
};
