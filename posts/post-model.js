const mongoose = require('mongoose');
const schema = require('./post-schema');
const postModel = mongoose.model('PostModel', schema);
module.exports = postModel;
