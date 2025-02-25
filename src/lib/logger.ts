import { createLogger, transports } from 'winston';

/**
 * Logger para registrar alertas de ataques HPP.
 *
 * @property { createLogger } logger - Instância do logger do Winston.
 */
const logger = createLogger({
  level: 'warn',
  transports: [new transports.Console()]
});

export { logger };
