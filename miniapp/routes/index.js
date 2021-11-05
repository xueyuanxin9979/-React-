var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
微信的小程序访问接口：http://localhost:3000/webcharts
 */
router.post('/webcharts',(req,res)=>{
  let users = {
    username:req.body.username,
    gender:req.body.gender,
    skills:req.body.skills,
    opinion:req.body.opinion
  }
  console.log(users);
  res.json({
    code:1002,
    msg:"success"
  })

})
module.exports = router;
