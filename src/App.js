import React from 'react';
import logo from './logo.svg';
import './App.css';

import Ust from './component/ust';
import Anasayfa from './component/anasayfa';
import İletisim from './component/iletisim';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <div>
                <Anasayfa title="anasayfa başlık" />
                <Ust />
              </div>
            );
          }}
        />

        <Route
          path="/iletisim"
          exact
          render={() => {
            return (
              <div>
                <İletisim />
              </div>
            );
          }}
        />
      </div>
    </Router>
  );
}

export default App;
