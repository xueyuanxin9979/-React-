var Sequelize = require('sequelize');
var db = new Sequelize('decorate','root','root',{
    host:'localhost',
    port:3306,
    dialect:'mysql',
    debug:true,//调试模式
    logging:console.log,//输出日期信息
    pool:{
        max:30,
        mix:3,
        idle:10000
    },
    timezone:'+08:00'//时区设置
})

module.exports = db;