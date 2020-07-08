/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_crf_flag', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    path: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    flag_workflow_id: {
      type: DataTypes.INTEGER,
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
    tableName: 'event_crf_flag'
  });
};
