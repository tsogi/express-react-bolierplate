const express = require("express");
require('dotenv').config(); // Loads .env variables as process.env.var_name
const initRoutes = require("./routes");
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true })) // for parsing POST data, application/x-www-form-urlencoded

initRoutes(app);

app.listen(process.env.EXPRESS_PORT, () => console.log(`Server started. Listening on port ${process.env.EXPRESS_PORT}`));