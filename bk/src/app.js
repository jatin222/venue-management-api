const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('../config/database');
require('dotenv').config();
const app = express();

connectDB();



// adding Helmet to enhance your Rest API's security
//app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// Define test route
app.get('/', (req, res) => {
    res.send('Server is working!');
});

// Define routes
const routes = require('./routes');
//const usersmodel = require('./models/Users');
const user_routes = require("./routes/userRoutes");
app.use('/api', routes);
app.use('/get_user', user_routes);

// starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
