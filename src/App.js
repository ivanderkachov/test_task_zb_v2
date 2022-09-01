import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from './pages/main/main';
import Else from './pages/else/else';

import store from './redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/*" element={<Else />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
