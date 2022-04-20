const userDao = require('./user-dao');

module.exports = (app) => {
    const findAllUsers = (req, res) =>
        userDao.findAllUsers()
            .then(users => res.json(users));

    const findUserById = (req, res) =>
        userDao.findUserById(req.userId)
            .then(user => res.json(user));

    const findByEmail = (req, res) =>
        userDao.findByEmail(req.params.email)
            .then(user => res.json(user));

    const deleteUser = (req, res) =>
        userDao.deleteUser(req.params.email)
            .then(status => res.send(status));

    const updateUser = (req, res) =>
        userDao.updateUser(req.body)
            .then(status => res.send(status));

    const updateUserByEmail = (req, res) =>
        userDao.updateUserByEmail(req.params.email, req.body)
            .then(status => res.send(status));

    const login = (req, res) => { //Store data in session
        userDao.findByEmailAndPassword(req.body)
            // console.log(req.body)
            .then(user => {
                if(user) {
                    req.session['profile'] = user;
                    res.json(user);
                    return;
                }
                res.status(403).json({code: 403, message: `Invalid email or password`});
            })
    }

    const register = (req, res) => {
        userDao.findByEmail(req.body.email)
            .then(user => {
                if(user) {
                    res.status(403).json({code: 403, message: `Account already exists with email '${req.body.email}'`});
                    //res.sendStatus(404);
                    return;
                }
                userDao.createUser(req.body)
                    .then(user => {
                        req.session['profile'] = user;
                        res.json(user)
                    });
            })
    }

    const profile = (req, res) => //Retrieve data from session
    res.json(req.session['profile']);

    const logout = (req, res) => //Invalidate session
        res.send(req.session.destroy());

    app.post('/api/login', login);
    app.post('/api/register', register);
    app.post('/api/profile', profile);
    app.post('/api/logout', logout);
    app.put('/api/user', updateUser);
    app.put('/api/user/:email', updateUserByEmail);
    app.delete('/api/user/:email', deleteUser);
    app.get('/api/users', findAllUsers);
    app.get('/api/user/:email', findByEmail);
};
