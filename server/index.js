const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

const router = require('./router');

const server = express();
const port = 3000;

server.use(helmet());
server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, '../')));

server.use('/api', router);

server.listen(port, () => {console.log(`Listening on port ${port}...`)});