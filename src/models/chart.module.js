'use strict';

let mongoose = require('mongoose'),
    schema = mongoose.Schema;

let chartSchema = new schema({
  data: {type: String, default: '', required: false},
  price: {type: String, default: '', required: false}
});

let ChartSchema = mongoose.model('chart', chartSchema);

module.exports = ChartSchema;
