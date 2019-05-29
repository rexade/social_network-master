var express = require('express');
var router = express.Router();
var da = require('../data_access/da')

////
router.get('/', function(req, res, next) {
  da.findProducts(function(err, orders) {
    res.render('orders/orders', {title:'Butik', order_list: orders});
  });

});

router.post('/', function(req, res, next) {
  da.saveProductsFromForm(req.body, function(err){
    da.findProducts(function(err, orders) {
      res.render('orders/orders', {title:'Butik', order_list: orders});
    });
  });
});


  ///


  router.get('/add', function(req, res){
    var userid = req.session['userid'];
    res.render('orders/add', {title: 'Add product'});
  });





module.exports = router;