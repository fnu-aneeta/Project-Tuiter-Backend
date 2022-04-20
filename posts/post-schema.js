const mongoose = require('mongoose');
const schema = mongoose.Schema({
    createDate: {type: Date, default: Date.now},
    userName: String,
    userProfile: String,
    companyName: String,
    email: String,
    address: {
        city: String,
        state: String,
        country: String
    },
    qualifications: [String],
    responsibilities: [String],
    verified: {type: Boolean, default: false},
    title: String,
    skills: {type: [{name: String, url: String}], default: []},
    description: String,
    url: String,
    isJobPost: {type: Boolean, default: true},
    attachments: {
        image: String,
        video: String
    },
    time: String,
    "logo-image": {type: String, default: "https://tash.org/wp-content/uploads/2015/06/job_openings.jpg"},
    "avatar-image": {type: String, default: "https://tash.org/wp-content/uploads/2015/06/job_openings.jpg"},
    stats: {
        comments: {type: Number, default: 0},
        share: {type: Number, default: 0},
        likes: {type: Number, default: 0}
    },
    salary: {
        format: String,
        min: String,
        max: String
    }
}, {collection: "posts"});
module.exports = schema;
