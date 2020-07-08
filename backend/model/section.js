/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('section', {
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'crf_version',
        key: 'crf_version_id'
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
    label: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: true
    },
    page_number_label: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parent_id: {
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
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'user_id'
      }
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    borders: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'section'
  });
};
