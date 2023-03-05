var mysql = require('mysql2');
var Sequelize = require('sequelize');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'HackReactor_RFP2302_Databases'
});

var moviesDB = new Sequelize('HackReactor_RFP2302_Databases', 'root', '', {
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

var moviesTable = moviesDB.define('moviesTable', {
  movieID: Sequelize.INTEGER,
  title: Sequelize.STRING,
  watched: Sequelize.BOOLEAN
});

moviesTable.removeAttribute('id');

  module.exports.moviesTable = moviesTable;
  module.exports.literal = Sequelize.literal;