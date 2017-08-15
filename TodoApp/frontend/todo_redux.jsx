import React from 'react';
import ReactDom from 'react-dom';
import { configureStore } from './store/store.js';
import { Root } from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const store = configureStore();
  ReactDom.render(<Root store={store}/>, content);
  window.store = store;
});
