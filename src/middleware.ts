import { Request, Response, NextFunction } from 'express';
import { createLogger, transports } from 'winston';

const logger = createLogger({
  level: 'warn',
  transports: [new transports.Console()]
});

function hppSanitize(request: Request, response: Response, next: NextFunction): void {
  const queryKeys = Object.keys(request.query);

  for (const key of queryKeys) {
    if (Array.isArray(request.query[key])) {
      logger.warn(`HPP detectado: Parâmetro duplicado ${key} foi sanitizado.`);
      request.query[key] = request.query[key][0];
    }
  }

  next();
}

export { hppSanitize };
