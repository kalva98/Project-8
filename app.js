const express = require('express'); //look up require express
const app = express(); // look up 
const bodyParser = require('body-parser');
// const pug = require('pug');

//--------------------------------------------------
//words to look up 
//bodyparser, extends layout

const routes = require('./routes/index');
const books = require('./routes/books');

// Database

// const db = require('./config/database');

// Test DB
// db.authenticate()
//   .then(() => console.log('Database connected'))
//   .catch(err => console.log('Error: ' + err))



// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
//using express and making it static in the public folder. Static allows the user to see the css

app.use('/', routes);
//routing to homepage
app.use('/books', books);
//redirecting to /books page without using the word redirect

// app.use(function(req, res, next){
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));