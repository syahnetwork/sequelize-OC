/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repeat_count', {
    repeat_count_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'event_crf',
        key: 'event_crf_id'
      }
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    group_count: {
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
    tableName: 'repeat_count'
  });
};
