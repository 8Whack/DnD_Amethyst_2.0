const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    "postgres://dzljtanynnmzgj:e944a7c501a142ad1ece036a34e718d8f3c9e4a75080f2f5dac5eaa10cceae95@ec2-34-205-46-149.compute-1.amazonaws.com:5432/db2j3k3p8f6cjp",
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)

module.exports = sequelize