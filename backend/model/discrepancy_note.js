/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discrepancy_note', {
    discrepancy_note_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    discrepancy_note_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'discrepancy_note_type',
        key: 'discrepancy_note_type_id'
      }
    },
    resolution_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'resolution_status',
        key: 'resolution_status_id'
      }
    },
    detailed_notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_created: {
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
    parent_dn_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    entity_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study',
        key: 'study_id'
      }
    },
    assigned_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_account',
        key: 'user_id'
      }
    },
    thread_uuid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    thread_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'discrepancy_note'
  });
};
