const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
const twig = require('twig');
const path = require('path')
const createError = require('http-errors')


const app = express()

app.use(cors())
//app.use(morgan('tiny'));
app.use(express.json(   {limit : '50mb'}));
app.use(express.urlencoded({ extended: false ,limit : '50mb'} ));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

//routes
app.use('/', require('./Controllers/navigationController'))

//rest controllers 
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/api/users', require('./Controllers/usersController'))
app.use('/api/file', require('./Controllers/fileController'))

let arrayRouter = require('./routes/array.route');
let regleRouter = require('./routes/regle.route');

app.use('/array', arrayRouter);
app.use('/regle', regleRouter);
//404 error handling
app.use(function (req, res, next) {
    next(createError(404))
})
// 500 error handling
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = err;
    res.status(err.status || 500);
    res.render('error/404')
})
//database
mongoose.connect(process.env.DB_MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('database Connected');
}).catch((err) => {
    console.log("error ", err.message);
});
app.listen(5000, () => {
    console.log("server started on port 5000")
})
