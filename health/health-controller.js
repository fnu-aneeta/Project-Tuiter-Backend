
module.exports = (app) => {
    const health = (req, res) => {
        res.json({status: "UP"});
    }

    app.get('/api/health', health);
};
