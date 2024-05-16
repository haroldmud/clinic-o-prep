const controller = require('../controllers/user');
const route = require('express').Router();

//CRUD Routes /users
route.get('/', controller.getUsers);
route.get('/:userId', controller.getUser);
route.post('', controller.createUser);
route.put('/:userId', controller.updateUser);
route.delete('/:userId', controller.deleteUser);

module.exports = route;
