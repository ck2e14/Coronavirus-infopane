import React from 'react';
import './App.css';
import UpdatePanelWidget from './Components/GeneralUpdatePanel/UpdatePanel';

function App() {
  return (
    <div className="App">

    <div className="page-content-wrapper">
    
      <div className="flex-container-app">
    
        <div className="flex-content-optionsList">
          component with column'd list of options to choose from:
          1 = general update (show by defaul?)
        </div>
    
        <div className="flex-content-contentPanel">
          
          <div className="contentPanel-filler upper-filler">  
            <UpdatePanelWidget />
          </div>

          <div className="contentPanel-filler lower-filler">
            NEWS API HERE
          </div>

        </div>

      </div>
    
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap" rel="stylesheet"></link>
    
    </div>
    </div>
  );
}

export default App;
