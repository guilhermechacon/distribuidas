const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.delete('/ongs/:id' ,OngController.delete);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id' ,IncidentController.delete);


routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

 module.exports = routes;

 /**
  *    console.log(name);
   console.log(email);
   console.log(whatsapp);
   console.log(city);
   console.log(uf);


  * 
  * 
 * Métodos HTTP
 * 
 * GET: Ler info do back-end
 * POST: Criar info ao back-end
 * PUT: Alterar info no back-end
 * DELETE: Deletar info no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados, enviados na rota após o "?" para filtros, páginação
 * 
 */