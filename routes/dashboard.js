const express = require('express');
const router = express.Router();
const da = require('../data_access/da');

const rdl = (req, res, next) => {
    if(!req.session['userid']) {
        res.redirect('/login');
    }
    else {
        next();
    }
};

router.get('/', rdl, function(req, res){
    da.getUserById(req.session['userid'], function(err, u){

        da.getFriendsOfUser(u, function(friends){
            var userid = req.session['userid'];
            console.log(friends);
            res.render('dashboard', {
                title: "Dashboard for " + u.first_name,
                user: u,
                userid: userid,
                friends: friends
            });
        });

    });

});

module.exports = router;