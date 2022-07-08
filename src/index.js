import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forgetten from './components/Forgetten';
import Create from './components/Create'
import Facebook from './components/Facebook';
import Sign from './components/Sign'

ReactDOM.render(
  <Router>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/Forgetten' element={<Forgetten/>} />
    <Route path='/Create' element={<Create/>} />
    <Route path='/Facebook' element={<Facebook/>} />
    <Route path='/Sign' element={<Sign/>} />
    
    

  </Routes>
</Router>,

document.getElementById('root')
);

