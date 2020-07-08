/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_account', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    passwd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active_study: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    institutional_affiliation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'status',
        key: 'status_id'
      }
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_account',
        key: 'user_id'
      }
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_lastvisit: {
      type: DataTypes.DATE,
      allowNull: true
    },
    passwd_timestamp: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    passwd_challenge_question: {
      type: DataTypes.STRING,
      allowNull: true
    },
    passwd_challenge_answer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_type',
        key: 'user_type_id'
      }
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    account_non_locked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    lock_counter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    run_webservices: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    access_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    time_zone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    enable_api_key: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    api_key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_uuid: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'user_account'
  });
};
