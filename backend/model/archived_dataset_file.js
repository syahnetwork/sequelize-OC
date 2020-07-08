/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('archived_dataset_file', {
    archived_dataset_file_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dataset_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dataset',
        key: 'dataset_id'
      }
    },
    export_format_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'export_format',
        key: 'export_format_id'
      }
    },
    file_reference: {
      type: DataTypes.STRING,
      allowNull: true
    },
    run_time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    file_size: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    format: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'archived_dataset_file'
  });
};
