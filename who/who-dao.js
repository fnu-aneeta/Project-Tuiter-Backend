const whoModel = require('./who-model');

const findAllWho = () =>  // use model to retrieve all tweets
    whoModel.find();

const createWho = (who) =>  // use model to retrieve all tweets
    whoModel.create(who);

const deleteWho = (handle) =>
    whoModel.deleteMany({handle});

const findByHandle = (handle) =>
    whoModel.findOne({handle});

module.exports = {
    findAllWho,
    createWho,
    deleteWho,
    findByHandle
};
