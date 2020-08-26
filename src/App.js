import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let photo = "/coverImage.jpg";
  let someJson = process.env.PUBLIC_URL + 'resume.json';

    
  return (
      <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />
        <p>
         {someJson.basics.name}
        </p>
      </header>
    </div>
  );
}

export default App;
