import { Request, Response, NextFunction } from 'express';
import { createLogger, transports } from 'winston';

import { IHppOptions } from './interfaces/IHppOptions';

/**
 * Logger para registrar alertas de ataques HPP.
 *
 * @property { createLogger } logger - Instância do logger do Winston.
 */
const logger = createLogger({
  level: 'warn',
  transports: [new transports.Console()]
});

/**
 * Middleware para proteção contra ataques de HTTP Parameter Pollution (HPP).
 *
 * @function hppSanitize
 *
 * @param { Request } request - Objeto de rqeuisição do Express.
 * @param { Response } response - Objeto de resposta do Express.
 * @param { NextFunction } next - Função para passar o ocntrole para o próximo middleware.
 * @returns { void | Response} - Continua o fluxo da requsição ou bloqueia casa "block" esteja ativado.
 */
function hppSanitize(request: Request, response: Response, next: NextFunction) {

  const options: IHppOptions = { block: false, keeplast: false };
  const sources = [request.query, request.body, request.headers, request.params];
  const ip = request.ip || request.connection.remoteAddress;

  for (const source of sources) {
    for (const key of Object.keys(source)) {

      if (Array.isArray(source[key])) {

        if (options.block) {
          const errorMessage = `Parâmetro duplicado detectado: ${key}. Ataque de ${ip} bloqueado.`;

          logger.warn(errorMessage);
          return response.status(400).json({
            error: errorMessage
          });
        }

        logger.warn(`HPP detectado: Parâmetro duplicado ${key} foi sanitizado.`);
        source[key] = options.keeplast
          ? source[key].pop()
          : source[key][0];

      }
    }
  }

  next();
}

export { hppSanitize };
