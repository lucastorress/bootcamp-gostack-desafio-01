import { Request, Response } from 'express';

export const projects = [];

class ProjectController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const project = projects.find(p => p.id === +id);
    return res.json(project);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    return res.json(projects);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const { id, title } = req.body;
    const projectExist = projects.find(p => p.id === +id);
    if (projectExist) {
      return res
        .status(401)
        .send({ status: 'Already exists an element with this ID.' });
    }
    const project = {
      id,
      title,
      tasks: [],
    };
    projects.push(project);
    return res.json(project);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(p => p.id === +id);
    if (project) {
      project.title = title;
      return res.json(project);
    }
    return res
      .status(404)
      .send({ status: 'There was not found an element with this ID.' });
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const projectIndex = projects.findIndex(p => p.id === +id);
    if (projectIndex !== -1) {
      projects.splice(projectIndex, 1);
      return res.status(200).send();
    }
    return res
      .status(404)
      .send({ status: 'There was not found an element with this ID.' });
  }
}

export default new ProjectController();
