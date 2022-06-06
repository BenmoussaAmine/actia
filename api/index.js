const express = require('express')
const morgan = require('morgan');
const cors = require('cors')
const twig = require('twig');
const path = require('path')
const createError = require('http-errors')

const { pool } = require('./config/db');


const app = express()

app.use(cors())
//app.use(morgan('tiny'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

//routes
app.use('/', require('./Controllers/navigationController'))

//rest controllers 
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/api/users', require('./Controllers/usersController'))
app.use('/api/file', require('./Controllers/fileController'))


pool.connect().then(client => {
    console.log("client connected")
})

app.listen(5000, () => {
    console.log("server started on port 5000")
})
