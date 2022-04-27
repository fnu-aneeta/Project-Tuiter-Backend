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

    const deleteWho = (req, res) =>
        dao.deleteWho(req.params.handle)
        .then(status => res.send(status));

    const findByHandle = (req, res) =>
        dao.findByHandle(req.params.handle)
        .then(who => res.json(who));

    app.get("/api/who", findAllWho);
    app.get("/api/who/:handle", findByHandle);
    app.post("/api/who", createWho);
    app.get("/api/rand/who", findRandWho);
    app.delete("/api/who/:handle", deleteWho);
}
