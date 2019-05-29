var express = require('express');
var router = express.Router();
var da = require('../data_access/da')

////
router.get('/', function(req, res, next) {
  da.findwarehouse(function(err, warehouse) {
    res.render('warehouse/warehouse', {title:'Warehouse', ware_list: warehouse});
  });

});

router.post('/', function(req, res, next) {
  da.savewarehouseFromform(req.body, function(err){
    da.findProducts(function(err, warehouse) {
      res.render('warehouse/warehouse', {title:'Warehouse', ware_list: warehouse});
    });
  });
});


  ///




module.exports = router;