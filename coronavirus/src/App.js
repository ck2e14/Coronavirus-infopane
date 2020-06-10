import React from 'react';
import './App.css';
import UpdatePanelWidget from './Components/GeneralUpdatePanel/UpdatePanel';

function App() {
  return (
    <div className="App">
    <div className="page-content-wrapper">
    
      <div className="flex-container-app">
    
        <div className="flex-content">
          <UpdatePanelWidget />
        </div>
    
        <div className="flex-content">
          widget here
        </div>

        <div className="flex-content">
          widget here
        </div>
        
        <div className="flex-content">
          widget here
        </div>
    
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap" rel="stylesheet"></link>
    
    </div>
    </div>
  );
}

export default App;
