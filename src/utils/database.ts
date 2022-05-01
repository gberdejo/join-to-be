import mongoose from 'mongoose';
// import config from 'config';
// import log from './logger';
import { get } from '../config/index';
import { logger } from '../log/index';

export const connectionDb = async () => {
  //   const dbUri = config.get<string>('URI');

  try {
    await mongoose.connect(get('mongo_uri'));
    logger.info('Connected to MongoDB');
  } catch (e: any) {
    logger.error(e);
  }
};
