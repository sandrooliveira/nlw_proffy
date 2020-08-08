import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();


// Corpo (Request body): Dados para criação ou ataulização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// QUery Params: Paginação, filtros, ordenação

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);




export default routes;