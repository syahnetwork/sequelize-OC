/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subject_event_status', {
    subject_event_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'subject_event_status'
  });
};
