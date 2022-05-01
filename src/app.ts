import express from 'express';
import { connectionDb } from './utils/database';
import { logger } from './log/index';

export default class App {
  private app: express.Application;

  private static instance: App;

  private port: string;

  private constructor(port: string) {
    this.port = port;
    this.app = express();
    connectionDb();
  }

  static getInstance(port: string) {
    this.instance = this.instance || new this(port);
    return this.instance;
  }

  run() {
    this.app.listen(this.port, () => {
      logger.info(`App listening on the port ${this.port}`);
    });
  }
}
