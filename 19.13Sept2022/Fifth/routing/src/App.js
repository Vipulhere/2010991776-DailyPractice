import React, {Component} from  'react';


import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Form from './components/Form.js';


function App() {
  return (
    <Router>
   <div>
<Route exact path="/" component = {Home} />
<Route exact path="/About" component = {About} />
<Route exact path="/Form" component = {Form} />

   </div>
   </Router>
  );
}

export default App;
