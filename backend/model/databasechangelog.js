/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('databasechangelog', {
    id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateexecuted: {
      type: DataTypes.DATE,
      allowNull: false
    },
    orderexecuted: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exectype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    md5sum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    liquibase: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contexts: {
      type: DataTypes.STRING,
      allowNull: true
    },
    labels: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deployment_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'databasechangelog'
  });
};
