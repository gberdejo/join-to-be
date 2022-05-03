import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { logger } from './log/index';
import allRoutes from './controllers';
import { logErrors, clientErrorHandler } from './utils/handlerError';

export default class App {
  private app: Application;

  private static instance: App;

  private port: string;

  private constructor(port: string) {
    this.port = port;
    this.app = express();
    this.middlewares();
    this.routes();
    this.errors();
    this.app.use(allRoutes);
  }

  static getInstance(port: string) {
    this.instance = this.instance || new this(port);
    return this.instance;
  }

  routes() {
    allRoutes.map((route) => this.app.use(route));
  }

  errors() {
    this.app.use(logErrors);
    this.app.use(clientErrorHandler);
  }

  middlewares() {
    this.app.use(express.json()).use(cors()).use(morgan('dev'));
  }

  run() {
    this.app.listen(this.port, () => {
      logger.info(`App listening on the port ${this.port}`);
    });
  }
}
