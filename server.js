const express = require('express');
var bodyParser = require("body-parser");

// Create connection
require("./config/database");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var Api = express.Router();
app.use("/", Api);
const params = {
  api: Api
};
require("./api/api")(params);

app.listen('5000', () => {
    console.log('Server started on port 5000');
});