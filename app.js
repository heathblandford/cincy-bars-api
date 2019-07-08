const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

// this was put in for CORS error when fetching data with fetch api in browsers
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

// db instance connection
require("./config/db_config");

const app = express();

const port = process.env.PORT || 3301;

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS

app.
  .route('/')
  .get((req, res) => {
    res.send('hello world')
  })

app
  .route('/cincy-bars')
  .get((req, res) => {
    res.json({"message": "Hello, welcome to the Cincy Bars API!"});
  });

const create_new_bar = require("./controllers/addNew_controller");
app
    .route("/cincy-bars/add-new-bar")
    .post(create_new_bar.createNewBar);

const view_bars = require("./controllers/cincy_bars_controller")
app
    .route("/cincy-bars/bars")
    .get(view_bars.listAllBars);

app
  .route('/cincy-bars/bars/:neighborhood')
  .get(view_bars.listNeighborhoodBars)

const update_bars = require('./controllers/update_bar_controller');
app
  .route('/cincy-bars/update-bar/:barName')
  .put(update_bars.updateBar)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});