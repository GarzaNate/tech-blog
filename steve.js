// required packages
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars')
const routes = require('./Controllers');
// const helpers = require('');
// sequelize connection
const sequelize = require('./Config/Connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

require('dotenv').config();
// express app
const app = express();
const PORT = process.env.PORT || 3001;

// creating handlebars
const hbs = exphbs.create({});

// session cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Public')));
app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening, running on port ${PORT}`));
}).catch(err => {
  console.error('unable to connect to database', err);
});
