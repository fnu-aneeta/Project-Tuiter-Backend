const postModel = require('./post-model'); // require the model

const findAllPosts = () =>  // use model to retrieve all posts
    postModel.find().sort({createDate: -1});

const findAllPostsByEmail = (email) =>  // use model to retrieve all posts by email
    postModel.find({email}).sort({createDate: -1});

const searchPosts = (searchString) =>  // use model to retrieve all posts
    postModel.find({qualifications: { $regex: searchString.split(" ").join("|"), $options: 'i' }}).sort({createDate: -1});

const createPost = (post) => // use model to insert a new post
    postModel.create(post);

const deletePost = (id) => postModel.deleteOne({_id: id});

const deletePosts = () => postModel.remove({});

const updatePost = (id, post) => postModel.findByIdAndUpdate(id, post);

module.exports = {
    findAllPosts,
    createPost,
    updatePost,
    deletePost,
    deletePosts,
    searchPosts,
    findAllPostsByEmail
};

