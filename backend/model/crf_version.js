/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crf_version', {
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    crf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'crf',
        key: 'crf_id'
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
    revision_notes: {
      type: DataTypes.STRING,
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
    oc_oid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    xform: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    xform_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'crf_version'
  });
};
