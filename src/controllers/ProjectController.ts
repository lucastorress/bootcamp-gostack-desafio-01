import { Request, Response } from 'express';

export const projects = [];

class ProjectController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const project = projects.find(p => p.id === id);
    return res.json(project);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    return res.json(projects);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const { id, title } = req.body;
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
    const project = projects.find(p => p.id === id);
    project.title = title;
    return res.json(project);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const projectIndex = projects.findIndex(p => p.id === id);
    projects.splice(projectIndex, 1);
    return res.send();
  }
}

export default new ProjectController();
