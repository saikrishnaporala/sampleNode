let MONGOOSE = require('mongoose');

MONGOOSE.connect('mongodb://localhost:27017/status');
MONGOOSE.connection.on('connected').then(() => console.log('Mongooose Default connection open'));
MONGOOSE.connection.on('error').then((err) => console.log('Mongooose Default connection error'+err));
MONGOOSE.connection.on('disconnected').then(() => console.log('Mongooose Default connection disconnected'));

module.exports = MONGOOSE;