const env = require('./env')
const fs = require('fs')
const path = require('path')

const basename = path.basename(__filename)


const Sequelize = require('sequelize')
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
})

const db = {}
//associations
const tableModel = {}

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
    tableModel[model.name] = model;
  });

Object.getOwnPropertyNames(db).forEach(modelName => {
  const currentModel = db[modelName];
  Object.getOwnPropertyNames(currentModel.rawAttributes).forEach(attributeName => {
    if (
      Object.prototype.hasOwnProperty.call(
        currentModel.rawAttributes[attributeName],
        'references'
      ) &&
      Object.prototype.hasOwnProperty.call(
        currentModel.rawAttributes[attributeName].references,
        'model'
      ) &&
      Object.prototype.hasOwnProperty.call(
        currentModel.rawAttributes[attributeName].references,
        'key'
      )
    ) {
      if (
        !(
          currentModel.rawAttributes[attributeName].references.model &&
          currentModel.rawAttributes[attributeName].references.key
        )
      ) {
        console.log(
          `*SKIPPED* ${modelName} ${attributeName} references a model ${currentModel.rawAttributes[attributeName].references.model} with key ${currentModel.rawAttributes[attributeName].references.key}`
        );
        return;
      }

      console.log(
        `${modelName} ${attributeName} references a model ${currentModel.rawAttributes[attributeName].references.model} with key ${currentModel.rawAttributes[attributeName].references.key}`
      );
      const referencedTable =
        tableModel[currentModel.rawAttributes[attributeName].references.model];

      currentModel.belongsTo(referencedTable, { foreignKey: attributeName });
      referencedTable.hasMany(currentModel, { foreignKey: attributeName });
      //associations
    }
  });
});

db.Sequelize = Sequelize
db.sequelize = sequelize

db.study_subject = require('../model/study_subject')(sequelize, Sequelize)
db.user_account = require('../model/user_account')(sequelize, Sequelize)
db.status = require('../model/status')(sequelize, Sequelize)
db.study = require('../model/study')(sequelize, Sequelize)
db.subject = require('../model/subject')(sequelize, Sequelize)

module.exports = db