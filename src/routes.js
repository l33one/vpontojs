const express = require('express');
const routes = express.Router();
const PontoController = require('./controllers/PontoController');

routes.get('/pontos', PontoController.index);
routes.get('/pontos/:id', PontoController.show);
routes.post('/pontos', PontoController.store);
routes.put('/pontos/:id', PontoController.update);
routes.delete('/pontos/:id', PontoController.destroy);


module.exports = routes;