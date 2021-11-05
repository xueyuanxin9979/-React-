var Sequelize = require('sequelize');
var db = require('../config/dbconfig');

var AdminModel = db.define('admin',{
    // 数据库属性要和前端页面属性保持一致
    adminId:{
        type:Sequelize.INTEGER,
        // 数据库中的表的字段名
        field:'admin_id',
        autoIncrement:true,
        primaryKey:true
    },
    adminUsername: {
        type:Sequelize.STRING,
        field: 'admin_username',
        allowNull:false,
        length:20
    },
    adminName: {
        type:Sequelize.STRING,
        field: 'admin_name',
        allowNull:false,
        length:20
    },
    adminRole: {
        type:Sequelize.INTEGER,
        field:'admin_role',
        allowNull:false,
        length:11
    },
    adminCreated: {
        type:Sequelize.DATE,
        field:'admin_created_at',
        allowNull:false,
    }
},{
    freezeTableName:true,
    timestamps:false
});
module.exports = AdminModel;