const Sequelize = require('sequelize');

require('dotenv').config();

const sequelizeConnection = process.env.JAWSDB_URL