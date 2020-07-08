/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_form_metadata', {
    item_form_metadata_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'item',
        key: 'item_id'
      }
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    header: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subheader: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parent_label: {
      type: DataTypes.STRING,
      allowNull: true
    },
    column_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    page_number_label: {
      type: DataTypes.STRING,
      allowNull: true
    },
    question_number_label: {
      type: DataTypes.STRING,
      allowNull: true
    },
    left_item_text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    right_item_text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'section',
        key: 'section_id'
      }
    },
    decision_condition_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    response_set_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'response_set',
        key: 'response_set_id'
      }
    },
    regexp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regexp_error_msg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    required: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    default_value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    response_layout: {
      type: DataTypes.STRING,
      allowNull: true
    },
    width_decimal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    show_item: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    tableName: 'item_form_metadata'
  });
};
