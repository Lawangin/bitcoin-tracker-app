import React, { Component } from 'react';

import classes from './TrackerDisplay.module.css';
import BitcoinTracker from "../../components/BitcoinTracker/BitcoinTracker";
import BitcoinTrackerEuro from "../../components/BitcoinTracker/BitcoinTrackerEuro";
// import axios from "axios";

class TrackerDisplay extends Component {
    state = {
        value: '60000',
    };

    componentDidMount() {
    }

    changeHandler = (event) => {
        this.setState({value: event.target.value})
    };

    render () {
        const timer = {
            oneSec: 1000,
            oneMin: 60000,
            oneHour: 3600000
        };

        return (
            <div className={classes.TrackerDisplay}>
                <div className={classes.Cockpit}>
                    <p>Bitcoin in USD and Euro Currency.<br />Updates Every Minute</p>
                    <label> Select update timer:
                        <select className={classes.Select} value={this.state.value} onChange={this.changeHandler}>
                            <option value={timer.oneSec}>One Second</option>
                            <option value={timer.oneMin}>One Minute</option>
                            <option value={timer.oneHour}>One Hour</option>
                        </select>
                    </label>
                </div>
                <div className={classes.TrackerBlock}>
                    <BitcoinTracker
                        setValue={this.state.value}
                    />
                </div>
                <div className={classes.TrackerBlock}>
                    <BitcoinTrackerEuro setValue={this.state.value} />
                </div>
            </div>
        );
    }
}

export default TrackerDisplay;