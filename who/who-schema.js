const mongoose = require('mongoose');
const schema = mongoose.Schema({
    createDate: {type: Date, default: Date.now},
    avatarIcon: String,
    userName: String,
    handle: String,


}, {collection: "who"});
module.exports = schema;
