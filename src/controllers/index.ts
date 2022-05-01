import glob from 'glob';
import path from 'path';

const routes: string[] = glob.sync(path.join(__dirname, '/**/*controller.ts'));
const controllers = routes.map((route) => require(route).default); // eslint-disable-line

export default controllers;
