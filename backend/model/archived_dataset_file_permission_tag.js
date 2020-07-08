/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('archived_dataset_file_permission_tag', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    archived_dataset_file_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'archived_dataset_file',
        key: 'archived_dataset_file_id'
      }
    },
    permission_tag_id: {
      type: DataTypes.STRING,
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
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'archived_dataset_file_permission_tag'
  });
};
