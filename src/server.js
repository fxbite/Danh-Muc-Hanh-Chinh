const express = require('express')
const cors = require('cors')

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Cors policy
app.use(cors());

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to DB
const db = require('./config/db');
db.connect();

// Route init
const route = require('./routes')
route(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
})
