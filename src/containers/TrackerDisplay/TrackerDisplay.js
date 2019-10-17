import React from 'react';

import classes from './TrackerDisplay.module.css';
import BitcoinTracker from "../../components/BitcoinTracker/BitcoinTracker";

const trackerDisplay = () => {
    return (
        <div className={classes.TrackerDisplay}>
            <div className={classes.TrackerBlock}>
                <BitcoinTracker />
            </div>
        </div>
    );
};

export default trackerDisplay;