var express = require('express');
var router = express.Router();

const OrderModel = require("../../db/model/ordermodel");

/*
查询所有预约信息：http://localhost:8081/orderapi/order
 */
router.get('/order',(req,res)=>{

    OrderModel.findAll({
        raw:true
    }).then(result=>{
        res.json(result)
    }).catch(err=>{
        console.log(err.message);
    })
})


/**
 * 删除用户预约信息：http://localhost:8081/orderapi/orderdel
 */
router.delete('/orderdel',(req,res)=>{
    OrderModel.destroy({
        where:{
            orderId:req.body.orderId
        }
    }).then(data=>{
        res.json({
            code:1003,
            msg:'删除成功'
        })
    }).catch(err=>{
        res.json({
            code:1004,
            msg:'删除失败'
        })
    })
})


/**
 * 更新用户预约信息 http://localhost:8081/orderapi/orderupdate
 */
router.put('/orderupdate',(req,res)=>{
    let data = req.body.data;
    OrderModel.update(data,{
        where:{
            orderId: data.orderId
        }
    }).then(data=>{n
        res.json({
            code:1005,
            msg:'测试成功'
        })
    })
})




module.exports = router;