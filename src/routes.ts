import { Router } from 'express';
import Project from './routes/Project';

export class RouterSingleton {
  private static _instance: RouterSingleton;

  private routes: any;

  private constructor() {
    this.routes = Router();
    console.log(this);
  }

  public static getInstance() {
    if (!this._instance) {
      console.log('Must be instantiated');
      this._instance = new RouterSingleton();
    } else {
      console.log('Already started...');
    }
    return this._instance;
  }

  public getRoutes() {
    return this.routes;
  }

  public createRoutes() {
    const routes = RouterSingleton.getInstance().getRoutes();
    Project(routes);
  }
}
