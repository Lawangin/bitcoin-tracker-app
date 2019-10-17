import React, { Component } from 'react';
import axios from 'axios';

import classes from './BitcoinTracker.module.css';

class BitcoinTracker extends Component {
    state = {
        tracker: null,
        lastUpdate: null
    };

    async componentDidMount() {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        const rate = response.data.bpi.USD.rate;
        const usdRate = rate.slice(0, 8);
        const update = response.data.time.updated;

        await this.setState({ tracker: usdRate, lastUpdate: update });
    }

    render () {
        return (
            <React.Fragment>
                <div className={classes.Text}>
                    Bitcoin Price:
                </div>
                <div className={classes.BitcoinTracker}>
                    ${this.state.tracker}
                </div>
                <div className={classes.Update}>
                    Last Update: {this.state.lastUpdate}
                </div>
            </React.Fragment>
        );
    }
}

export default BitcoinTracker;