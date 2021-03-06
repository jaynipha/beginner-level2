const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug') ('app:db')
const Joi = require('joi');
const mongoose = require('mongoose');
// const courses = require('./routes/courses');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
// const route = require('./routes/route');
// const authenticate = require('./authenticate')
require('dotenv').config();
const app = express();

// app.set('view engine','pug');
// app.set('views', './views')

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get ('env')}`);

mongoose.connect('mongodb://localhost/playground')

.then(( ) =>console.log('connected to MongoDB. . .'))

.catch(err =>console.error('could not connect to MongoDB. . .', err))




if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    startupDebugger('morgan enabled');

};
app.use(express.json());
app.use(helmet());
// app.use('/api/courses/', courses);
//  app.use('/sad', route);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`))


