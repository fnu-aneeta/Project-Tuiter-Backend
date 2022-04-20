const dao = require('./post-dao');

module.exports = (app) => {

    const findAllPosts = (req, res) =>
        dao.findAllPosts()
            .then(posts => res.json(posts));

    const findAllPostsByEmail = (req, res) =>
        dao.findAllPostsByEmail(req.params.email)
            .then(posts => res.json(posts));

    const searchPosts = (req, res) => {
        if(req.query.search) {
            dao.searchPosts(req.query.search)
                .then(posts => res.json(posts));
        }else{
            dao.findAllPosts()
                .then(posts => res.json(posts));
        }
    }

    const createNewPost = (req, res) => {
        dao.createPost(req.body)
            .then((newPost) => res.json(newPost));
    }

    const deletePost = (req, res) => {
        dao.deletePost(req.params.id)
            .then((status) => res.send(status));
    }

    const deletePosts = (req, res) => {
        dao.deletePosts()
            .then((status) => res.send(status));
    }

    const updatePost = (req, res) => {
        dao.updatePost(req.params.id, req.body)
            .then(status => res.send(status));

    }
    app.put('/api/post/:id', updatePost);
    app.delete('/api/post/:id', deletePost);
    app.delete('/api/posts', deletePosts);
    app.post('/api/post', createNewPost);
    app.get('/api/search/posts', searchPosts);
    app.get('/api/posts', findAllPosts);
    app.get('/api/posts/:email', findAllPostsByEmail);
};

