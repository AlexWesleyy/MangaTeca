const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mangas','root', 'mangateca123456', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Database Started')
} 
catch(error) {
  console.log('Database not connected!', error)
}

module.exports = sequelize