const express = require('express');
const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');
const VerificationController = require('./controllers/VerificationController');
const sessionMiddleware = require('./middlewares/verification');

const routes = express.Router();

routes.post('/session', SessionController.authentication);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.use(sessionMiddleware);
routes.get('/verification', VerificationController.verification);

module.exports = routes;