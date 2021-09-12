import express from 'express';
import bodyParser from 'body-parser';
import jwt from'jsonwebtoken';
import mongoose from'mongoose';
import cookieParser from'cookie-parser';
import db from './db';

import User from './models/user';
import Item from './models/item';
import config from './config';
import routes from './routes';

const app = express();
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT || config.server.port;
app.listen(port);
console.log('Node + Express REST API skeleton server started on port: ' + port);


// Post -  /login
// Get -  /login

module.exports = app;
