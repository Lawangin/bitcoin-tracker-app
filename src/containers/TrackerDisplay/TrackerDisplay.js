import React from 'react';

import classes from './TrackerDisplay.module.css';
import BitcoinTracker from "../../components/BitcoinTracker/BitcoinTracker";
import BitcoinTrackerEuro from "../../components/BitcoinTracker/BitcoinTrackerEuro";

const trackerDisplay = () => {
    return (
        <div className={classes.TrackerDisplay}>
            <p className={classes.Text}>Bitcoin in USD and Euro Currency.<br />Updates Every Minute</p>
            <div className={classes.TrackerBlock}>
                <BitcoinTracker />
            </div>
            <div className={classes.TrackerBlock}>
                <BitcoinTrackerEuro />
            </div>
        </div>
    );
};

export default trackerDisplay;