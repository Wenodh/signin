import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import logger from 'morgan';
import connection from './database/index.js';
import user from './routes/index.js';
// import { readFileSync } from 'fs';
// const buffer = readFileSync(new URL('./data.proto', import.meta.url));

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use((req, res, next) => {
    req.socket = connection;
    next();
});

//routing
// const routes = require('./routes/user.route');
app.use('/api', user);

app.get('/', (req, res) => {
    res.send('Hello world');
});
app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
