const controller = require('../controllers/user');
const route = require('express').Router();

//CRUD Routes /users
route.get('/users', controller.getUsers);
route.get('/user/:userId', controller.getUser);
route.post('/user', controller.createUser);
route.put('/user/:userId', controller.updateUser);
route.delete('/user/:userId', controller.deleteUser);

module.exports = route;
