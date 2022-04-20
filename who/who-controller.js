const dao = require("./who-dao");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = (app) => {
    const findAllWho = (req, res) =>
        dao.findAllWho()
            .then(who => res.json(who));

    const findRandWho = (req, res) =>
        dao.findAllWho()
            .then(who => {
                let totalSize = 5;
                let startVal = getRandomInt(who.length-totalSize);
                res.json(who.slice(startVal, startVal+totalSize))
            });

    const createWho = (req, res) => {
        dao.createWho(req.body)
            .then((newWho) => res.json(newWho));
    }

    app.get("/api/who", findAllWho);
    app.post("/api/who", createWho);
    app.get("/api/rand/who", findRandWho);
}
