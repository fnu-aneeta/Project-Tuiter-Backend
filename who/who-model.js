const mongoose = require('mongoose');
const schema = require('./who-schema');
const whoModel = mongoose.model('WhoModel', schema);
module.exports = whoModel;
