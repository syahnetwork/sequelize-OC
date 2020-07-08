/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit_event_context', {
    audit_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'audit_event',
        key: 'audit_id'
      }
    },
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    study_event_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    study_event_definition_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    study_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'audit_event_context'
  });
};
