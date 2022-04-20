// const CONSTANTS = require('./consts');
//
// const express = require('express'); // load the express library
// const app = express(); // create an instance of the library
//
// app.use(function(
//     req,
//     res,
//     next)
// {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods",
//         "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });
//
// const bodyParser = require('body-parser'); // load body parser library
// app.use(bodyParser.urlencoded({ extended: false })); // encode special characters
// app.use(bodyParser.json()); // register JSON body parser middleware
//
// const session = require('express-session')
// app.use(session({
//     secret: 'keyboard cat',
//     cookie: {}
// }));
//
// const mongoose = require('mongoose'); // load the mongoose library
//
// mongoose.connect(CONSTANTS.MONGODB_URL);
//
// require('./users/user-controller')(app);
//
// app.listen(process.env.PORT || 4000); // listen to port 4000
//
//
// app.get('/hello', (
//     req,
//     res) => { // use express library to listen for URL pattern "/hello"
//     // console.log('Hello World!!!');
//     res.send('Hello World!');// respond with string "Hello World!"
//     // res.json({message: 'Hello World!'});
//
// });
// // require('./services/movies-service')(app); // pass express instance to service
// require('./services/tweeter-service')(app);
// require('./services/who-service')(app);
// require('./services/profile-service')(app);
// require('./movies/service')(app); // load the movie service and pass it an instance of express
// require('./services/user-service')(app);
//
//
//
const CONSTANTS = require('./consts');
const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        ["http://localhost:3000"]);
        //["https://aneeta-jobportal.web.app"]);
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    cookie: {}
}));

const mongoose = require('mongoose');
mongoose.connect(CONSTANTS.MONGODB_URL);

require('./users/user-controller')(app);
require('./posts/post-controller')(app);
require('./health/health-controller')(app);
require('./who/who-controller')(app);

app.listen(process.env.PORT || 4000);
