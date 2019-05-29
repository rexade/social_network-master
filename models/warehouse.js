const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Person Schema
const WarehouseSchema = new Schema({
    stock_item: String,
    warehouse: String,
    instock: Number,

}, { collection: 'warehouses' });

// Create model
const warehouses = mongoose.model('warehouses', WarehouseSchema);

module.exports = warehouses;