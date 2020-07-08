/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_detail', {
    job_detail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_by_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_account',
        key: 'user_id'
      }
    },
    updated_by_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_account',
        key: 'user_id'
      }
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study',
        key: 'study_id'
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
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_completed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    log_path: {
      type: DataTypes.STRING,
      allowNull: true
    },
    source_file_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'job_detail'
  });
};
