

const Sequelize = require("sequelize");
const sequelize = require('../connection/db.connection');


var Student = sequelize.define('student', {
    sname: Sequelize.STRING,
    address: Sequelize.DATE,
   roll: Sequelize.INTEGER
});


module.exports = Student;
