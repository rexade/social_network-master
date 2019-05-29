const express = require('express');
const router = express.Router();
const da = require('../data_access/da');
const bcrypt = require('bcrypt');

router.get('/', function(req, res){
    var userid = req.session['userid'];
    res.render('login', {title: 'Login', userid:userid});
});

router.post('/', function(req, res){
    da.getUserByUsername(req.body['username'], function(err, user){
        if(user) {
            bcrypt.compare(req.body['password'], user.password, function(err, answer){
                if(answer) {
                    req.session.userid = user._id;
                    res.redirect('/dashboard');
                }
                else {
                    res.redirect('login', 401);
                }
            });
        }
        else {
            res.redirect('login', 401);
        }
    });
});

module.exports = router;