import React from 'react';
import ReactDom from 'react-dom';
import { configureStore } from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDom.render(<h1>Todos App</h1>, root);
  const store = configureStore();
  window.store = store;
});
