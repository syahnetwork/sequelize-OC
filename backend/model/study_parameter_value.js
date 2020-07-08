/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('study_parameter_value', {
    study_parameter_value_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(study_parameter_value_study_parameter_value_id_seq::regclass)'
    },
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'study',
        key: 'study_id'
      }
    },
    value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parameter: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'study_parameter',
        key: 'handle'
      }
    }
  }, {
    tableName: 'study_parameter_value'
  });
};
