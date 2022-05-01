import App from './app';
import { get } from './config';
import { connectionDb } from './utils/database';
import { logger } from './log/index';

connectionDb()
  .then(() => {
    App.getInstance(get('port')).run();
  })
  .catch((err) => {
    logger.error(err);
  });
