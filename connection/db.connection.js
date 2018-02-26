const Sequelize = require("sequelize");

//establishing connection to mysql database
const sq = new Sequelize('sequelize_demo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    }
});
//testing the connection
sq.authenticate()
.then(()=>{
    console.log("connection has been established sucessfully")
})
.catch((err)=>{
    console.log("unable to connect to database",err)
})


module.exports = sq;