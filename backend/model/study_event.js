/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('study_event', {
    study_event_id: {
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
      },
      unique: true
    },
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study_subject',
        key: 'study_subject_id'
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sample_ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_end: {
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
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'status',
        key: 'status_id'
      }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subject_event_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    start_time_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    end_time_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    attestation: {
      type: DataTypes.STRING,
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
    },
    locked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    signed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'study_event'
  });
};
