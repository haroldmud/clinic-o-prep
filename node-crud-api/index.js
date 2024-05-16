const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

//test-route
app.get('/', (req, res, next) => {
  res.send('Hello World');
});

//CRUD Route
app.use('/users', require('./routes/users'));

//error handling
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message;
  res.status(status).json({ message: message });
});

//sync database
sequelize
  .sync()
  .then(result => {
    console.log("Database Synced and Connected!")
    app.listen(3000);
  })
  .catch(err => console.log(err));
