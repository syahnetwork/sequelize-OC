/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('study', {
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parent_study_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study',
        key: 'study_id'
      }
    },
    unique_identifier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    secondary_identifier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_planned_start: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_planned_end: {
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
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study_type',
        key: 'study_type_id'
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
    principal_investigator: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facility_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facility_city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facility_state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facility_zip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facility_country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facility_recruitment_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facility_contact_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facility_contact_degree: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facility_contact_phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facility_contact_email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    protocol_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    protocol_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    protocol_date_verification: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    phase: {
      type: DataTypes.STRING,
      allowNull: true
    },
    expected_total_enrollment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sponsor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    collaborators: {
      type: DataTypes.STRING,
      allowNull: true
    },
    medline_identifier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conditions: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keywords: {
      type: DataTypes.STRING,
      allowNull: true
    },
    eligibility: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age_max: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age_min: {
      type: DataTypes.STRING,
      allowNull: true
    },
    healthy_volunteer_accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    purpose: {
      type: DataTypes.STRING,
      allowNull: true
    },
    allocation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    masking: {
      type: DataTypes.STRING,
      allowNull: true
    },
    control: {
      type: DataTypes.STRING,
      allowNull: true
    },
    assignment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endpoint: {
      type: DataTypes.STRING,
      allowNull: true
    },
    interventions: {
      type: DataTypes.STRING,
      allowNull: true
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: true
    },
    selection: {
      type: DataTypes.STRING,
      allowNull: true
    },
    timing: {
      type: DataTypes.STRING,
      allowNull: true
    },
    official_title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    results_reference: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    oc_oid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    old_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1',
      references: {
        model: 'status',
        key: 'status_id'
      }
    },
    study_env_uuid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    study_env_site_uuid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    env_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    schema_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    published: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    file_path: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    subject_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    study_uuid: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'study'
  });
};
