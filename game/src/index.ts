import './styles/styles.scss';
import { App } from './app';

window.onload = () => {
  const appElement = document.getElementById('app');

  if (!appElement) {
    throw Error('App root element not found');
  }

  const app1 = new App(appElement).start();
};
