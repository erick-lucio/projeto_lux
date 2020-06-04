const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const helmet = require('helmet')

//require('./database');

app.use(bodyParser.json());
app.use(cors());
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(routes);


app.listen(3100);

/*




s
*/