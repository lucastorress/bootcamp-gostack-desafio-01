import { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * Middleware que checa se o projeto existe
 */
export function checkProjectExists(
  projects?: any[],
  req?: Request,
  res?: Response,
  next?: NextFunction
): any {
  const { id } = req.params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
}

/**
 * Middleware que dá log no número de requisições
 */
export function logRequests(
  req?: Request,
  res?: Response,
  next?: NextFunction
): any {
  console.count('Número de requisições');
  return next();
}

export default { checkProjectExists, logRequests };
