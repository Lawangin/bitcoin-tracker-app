import React from 'react';
import Normalize from 'normalize.css/normalize.css'

// import BitcoinTracker from "./components/BitcoinTracker/BitcoinTracker";
import TrackerDisplay from './containers/TrackerDisplay/TrackerDisplay';


function App() {
  return (
    <div className={Normalize}>
      <TrackerDisplay />
    </div>
  );
}

export default App;
