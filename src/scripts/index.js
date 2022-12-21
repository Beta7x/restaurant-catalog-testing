import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import swRegister from './utils/sw-register';
import App from './views/app';

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-unused-vars
  const app = new App({
    button: document.querySelector('.hamburger'),
    drawer: document.querySelector('.nav__menu'),
    content: document.querySelector('main'),
  });
  window.addEventListener('hashchange', () => {
    app.renderPage().then();
  });
  window.addEventListener('load', () => {
    swRegister().then();
    app.renderPage().then();
  });
});
