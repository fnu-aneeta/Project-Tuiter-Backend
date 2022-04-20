const mongoose = require('mongoose');
const {ROLE_CANDIDATE} = require("../consts");
const userSchema = mongoose.Schema({
    createDate: {type: Date, default: Date.now},
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    skills: [{name: String, experience: Number}],
    jobTitle: String,
    about: String,
    company: String,
    website: String,
    profileImage: {type:String, default: "https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg"},
    coverImage: {type:String, default: "https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover.jpg"},
    roles: {type: Array, default: [ROLE_CANDIDATE]},
    address: {
        city: {type: String, default: "Boston"},
        state: {type: String, default: "MA"},
        country: {type: String, default: "USA"},
    },
    friends: [{name: String, url: String, profileImage: String}],
    followers: [{name: String, url: String, profileImage: String}],
    education: [{
        school: String,
        degree: String,
        field: String,
        isCurrent: Boolean,
        url: String,
        from: {
            month: Number,
            year: Number
        },
        to:{
            month: Number,
            year: Number
        },
        grade: String,
        description: String
    }],
    experience: [{
        title: String,
        company: String,
        isCurrent: Boolean,
        url: String,
        from: {
            month: Number,
            year: Number
        },
        to: {
            month: Number,
            year: Number
        },
        address: {
            city: String,
            state: String,
            country: String
        },
        description: String
    }],
    projects: [{
        name: String,
        isCurrent: Boolean,
        from: {
            month: Number,
            year: Number
        },
        to: {
            month: Number,
            year: Number
        },
        organization: String,
        url: String,
        description: String
    }]
}, {collection: 'users'});
module.exports = userSchema;
