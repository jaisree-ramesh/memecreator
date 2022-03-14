import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './Main';
ReactDOM.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="main" element={ <Main /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


