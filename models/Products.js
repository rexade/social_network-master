const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Person Schema
const ProductsSchema = new Schema({
    item: String,
    price: Object,
    Butik: String,
    ordered: Number,

}, { collection: 'products' });

// Create model
const products = mongoose.model('products', ProductsSchema);

module.exports = products;