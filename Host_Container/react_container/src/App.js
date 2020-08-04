import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IFrameApp from './IFrameApp';
import ReactApp from './ReactApp';
import WebComponenetApp from './WebComponentApp';
import AngularApp from './AngularApp';

function App() {
  
  return (
    <BrowserRouter>
      <div>
        {/* <WebComponenetApp /> */}
        <AngularApp />
        {/* <ReactApp />
        <IFrameApp /> */}
      </div>
    </BrowserRouter>
    );
}

export default App;
