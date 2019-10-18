import React from 'react';
import Normalize from 'normalize.css/normalize.css'

// import BitcoinTracker from "./components/BitcoinTracker/BitcoinTracker";
import TrackerDisplay from './containers/TrackerDisplay/TrackerDisplay';
import classes from './App.module.css';


function App() {
  return (
    <div className={Normalize}>
      <div className={classes.App}>
        <TrackerDisplay />
      </div>
    </div>
  );
}

export default App;
