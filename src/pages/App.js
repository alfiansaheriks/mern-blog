import React from 'react';
import { Navigasi, store } from '../config';
import './App.css';
import { Provider } from 'react-redux';

function App() {
  return (
  <Provider store={store}>
    <Navigasi />
   </Provider>
  );
}

export default App;
