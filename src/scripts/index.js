import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './views/elements/navbar';
import './views/elements/hero-section';
import './views/elements/restaurant-item';
import './views/elements/restaurant-list';
import './views/elements/skip-content';
import '../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '../../node_modules/@fortawesome/fontawesome-free/js/all';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.menu-list'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
