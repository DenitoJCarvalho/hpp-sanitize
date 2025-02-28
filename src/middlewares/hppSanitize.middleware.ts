import { Request, Response, NextFunction, RequestHandler } from 'express';

import { IHppOptions } from '../interfaces/IHppOptions.js';

import { logger } from '../lib/logger.js';

/**
 * Middleware para proteção contra ataques HTTP Parameter Pollution (HPP).
 *
 * @function hppSanitize
 *
 * @param { IHppOptions } options  - Opções de configuração do middleware.
 * @param { boolean } options.block  - Se `true`, bloquear a requisição se um ataque HPP for detectado.
 * @returns { RequestHandler } - Função de middleware para proteção contra HPP.
 */
const hppSanitize = (options: IHppOptions = { block: true }): RequestHandler => {
  return (request: Request, response: Response, next: NextFunction): void => {

    const sources = [
      request.query || {},
      request.body || {},
      request.headers || {},
      request.params || {}
    ];
    const ip = request.ip || (request.connection.remoteAddress || `IP não identificado.`);

    for (const source of sources) {
      for (const key of Object.keys(source)) {

        if (Array.isArray(source[key])) {
          const errorMessage = `HPP detectado: Parâmetro duplicado detectado: ${key}. Ataque do IP: ${ip} bloqueado.`;

          if (!options.block) {
            logger.warn(`HPP detectado: Parâmetro duplicado ${key} foi sanitizado. Tentativa de ataque do IP: ${ip}.`);
            source[key] = source[key][0];
          }

          logger.warn(errorMessage);
          response.status(400).json({ error: errorMessage });
          return;

        }
      }
    }

    next();
  }
}

export { hppSanitize };
