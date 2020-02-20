import { Request, Response, NextFunction } from express from 'express'

import cors from 'cors';
import { projects } from './controllers/ProjectController';

import { RouterSingleton } from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    const router = RouterSingleton.getInstance();
    router.createRoutes();
    this.express.use(router.getRoutes());
  }

  private logRequests(
    request: Request,
    response: Response,
    next: NextFunction
  ): any {
    console.count('Número de requisições');
    return next();
  }
}

export default new App().express;
