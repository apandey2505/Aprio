const Sequelize = require('sequelize');
const config = require('../aprio_getDataFromApi/config/config')

const sequelize = new Sequelize(config.development['database'], config.development['username'], config.development['password'], {
  host: config.development['host'],
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
