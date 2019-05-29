var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    const n = Math.floor(Math.random() * 100 + 1);
    res.render('lucky', {title: 'Lucky number', number: n});
});

module.exports = router;