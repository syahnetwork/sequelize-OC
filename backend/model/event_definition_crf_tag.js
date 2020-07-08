/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_definition_crf_tag', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    path: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    active: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'event_definition_crf_tag'
  });
};
