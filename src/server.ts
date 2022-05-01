import App from './app';
import { get } from './config';

App.getInstance(get('port')).run();
