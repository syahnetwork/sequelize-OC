/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dataset', {
    dataset_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sql_statement: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    num_runs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_start: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_end: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_last_run: {
      type: DataTypes.DATEONLY,
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
    approver_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    show_event_location: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_event_start: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_event_end: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_subject_dob: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_subject_gender: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_event_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_subject_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_subject_unique_id: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_subject_age_at_event: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_crf_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_crf_version: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_crf_int_name: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_crf_int_date: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_group_info: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_disc_info: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    odm_metadataversion_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    odm_metadataversion_oid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    odm_prior_study_oid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    odm_prior_metadataversion_oid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    show_secondary_id: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    dataset_item_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dataset_item_status',
        key: 'dataset_item_status_id'
      }
    }
  }, {
    tableName: 'dataset'
  });
};
