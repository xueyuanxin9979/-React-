var express = require('express');
var router = express.Router();

const AdminModel = require('../../db/model/adminmodel');

/*
查询所有管理员信息：http://localhost:8081/adminapi/admin
 */
router.get('/admin',(req,res)=>{

    AdminModel.findAll({
        raw:true
    }).then(result=>{
        res.json(result)
    }).catch(err=>{
        console.log(err.message);
    })
})

/**
 * 删除管理员信息：http://localhost:8081/adminapi/admindel
 */
router.delete('/admindel',(req,res)=>{
    AdminModel.destroy({
        where:{
            adminId:req.body.adminId
        }
    }).then(data=>{
        res.json({
            code:1001,
            msg:'删除成功'
        })
    }).catch(err=>{
        res.json({
            code:1002,
            msg:'删除失败'
        })
    })
})

/**
 * 更新管理员信息 http://localhost:8081/adminapi/adminupdate
 */
router.put('/adminupdate',(req,res)=>{
    let data = req.body.data;
    AdminModel.update(data,{
        where:{
            adminId: data.adminId
        }
    }).then(data=>{
        res.json({
            code:1005,
            msg:'测试成功'
        })
    })
})

/*
*增加员工   http://localhost:8081/adminapi/adminadd
 */
router.put('/adminadd',(req,res)=>{
    let data = req.body.data;
    console.log(data);
    
    AdminModel.create({
            adminId:data.adminId,
            adminUsername:data.adminUsername,
            adminName:data.adminName,
            adminRole:data.adminRole,
            adminCreated:data.adminCreated,
        }
        // data

    ).then(data=>{
        res.json({
            code:1004,
            msg:'保存成功'
        })
    }).catch(err=>{
        console.log(err);
        throw  err;
    })
})


module.exports = router;