/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_layout_media', {
    form_layout_media_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    form_layout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'form_layout',
        key: 'form_layout_id'
      }
    },
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'form_layout_media'
  });
};
