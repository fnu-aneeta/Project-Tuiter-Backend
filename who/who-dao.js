const whoModel = require('./who-model'); // require the model

const findAllWho = () =>  // use model to retrieve all tweets
    whoModel.find();

const createWho = (who) =>  // use model to retrieve all tweets
    whoModel.create(who);

module.exports = {
    findAllWho,
    createWho
};
