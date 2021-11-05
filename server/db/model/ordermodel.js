var Sequelize  = require('sequelize');
var db = require('../config/dbconfig');

var OrderModel = db.define('ord',{
    orderId: {
        type:Sequelize.INTEGER,
        field:'ord_id',
        autoIncrement:true,
        primaryKey:true
    },
    orderName:{
        type:Sequelize.STRING,
        field: 'ord_name',
        allowNull:false,
        length:30
    },
    orderPhone:{
        type:Sequelize.STRING,
        field: 'ord_phone',
        allowNull:false,
        length:20
    },
    orderType:{
        type:Sequelize.STRING,
        field: 'ord_type',
        allowNull:false,
        length:20
    },
    orderDate: {
        type:Sequelize.DATE,
        field:'ord_date',
        allowNull:false,
    },
    orderMessage: {
        type:Sequelize.STRING,
        field: 'ord_message',
        allowNull:false,
        length:255
    }
},{
    freezeTableName:true,
    timestamps:false,
})

module.exports = OrderModel;