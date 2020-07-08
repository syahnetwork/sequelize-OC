/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('study_module_status', {
    id: {
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
    study: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    crf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    event_definition: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    subject_group: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    rule: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    site: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    users: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    version: {
      type: DataTypes.INTEGER,
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
      allowNull: true
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'study_module_status'
  });
};
