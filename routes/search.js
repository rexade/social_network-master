var express = require('express');
var router = express.Router();
var da = require('../data_access/da');

router.post('/', function(req, res){
    da.search(req.body['search'], function(err, users){
        var userid = req.session['userid'];
        res.render('users/users', {title:'Search Result', user_list: users, userid: userid});
    });
});

module.exports = router;