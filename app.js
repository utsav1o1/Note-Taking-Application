require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const User = require('./server/models/User');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI
  }),
  //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
  // Date.now() - 30 * 24 * 60 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



connectDB();

// static files
app.use(express.static('public'));

// template engine

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//routes

app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/auth'));
app.use('/dashboard', require('./server/routes/dashboard'));
app.get('*', function(req, res) {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
