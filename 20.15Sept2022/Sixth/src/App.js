import React from  'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';


const App = ()  => {
  return (
    
   <div className='App' >
      <h1>This is App Component of this Website</h1>
      <p>This is a paragraph in App Component</p>
      <Home/>
   </div>
   
  );
}

export default App;
