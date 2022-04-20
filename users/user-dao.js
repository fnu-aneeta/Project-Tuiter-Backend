const userModel = require('./user-model');

const findAllUsers = () =>
    userModel.find();

const findUserById = (userId) =>
    userModel.findById(userId);

const findByEmail = (email) =>
    userModel.findOne({email});

const findByEmailAndPassword = ({email, password}) =>
    userModel.findOne({email, password});

const createUser = (user) =>
    userModel.create(user);

const updateUser = (user) =>
    userModel.updateOne({_id: user._id}, {
        $set: user
    });

const updateUserByEmail = (email, user) =>
    userModel.updateOne({email}, {
        $set: user
    });

const deleteUser = (email) =>
    userModel.deleteMany({email});

module.exports = {
    findByEmail, findAllUsers, findUserById,
    findByEmailAndPassword,
    createUser, updateUser, updateUserByEmail, deleteUser
};
