import ProjectController from '../controllers/ProjectController';

export default function Project(routes) {
  routes.get('/projects/:id', ProjectController.index);
  routes.get('/projects', ProjectController.show);
  routes.post('/projects', ProjectController.store);
  routes.put('/projects/:id', ProjectController.update);
  routes.delete('/projects/:id', ProjectController.delete);
}
