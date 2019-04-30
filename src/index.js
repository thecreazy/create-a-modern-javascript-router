/* eslint-disable no-console */
/* eslint-disable no-alert */

import Router from './Router';

const router = new Router({
  mode: 'hash',
  root: '/'
});

router
  .add(/about/, () => {
    alert('welcome in about page');
  })
  .add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
    alert(`products: ${id} specification: ${specification}`);
  })
  .add('', () => {
    // general controller
    console.log('welcome in catch all controller');
  });
