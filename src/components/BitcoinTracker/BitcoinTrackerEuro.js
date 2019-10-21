import React, { Component } from 'react';
import axios from 'axios';

import classes from './BitcoinTrackerEuro.module.css';

class BitcoinTrackerEuro extends Component {
    state = {
        tracker: null,
        lastUpdate: null
    };

    componentDidMount() {
        let update = null;
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                update = response.data.time.updated;
                // return setInterval(() => response.data.bpi.USD.rate, 5000);
                return response.data.bpi.EUR.rate;
            })
            .then(rate => rate.slice(0, 8))
            .then(usdRate => this.setState({ tracker: usdRate, lastUpdate: update}))
            .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.tracker !== this.state.tracker) {
            setInterval(() => {
                let update;
                axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .then(response => {
                        update = response.data.time.updated;
                        // return setInterval(() => response.data.bpi.USD.rate, 5000);
                        return response.data.bpi.EUR.rate;
                    })
                    .then(rate => rate.slice(0, 8))
                    .then(usdRate => this.setState({ tracker: usdRate, lastUpdate: update}))
                    .catch(err => console.log(err));
            }, 60000);
        }
    }

    render () {
        const now = Date().toString();
        return (
            <React.Fragment>
                <div className={classes.Text}>
                    EUR<br />
                    Bitcoin
                </div>
                <div className={classes.BitcoinTracker}>
                    €{this.state.tracker}
                </div>
                <div className={classes.Update}>
                    Last Update: {now}
                </div>
            </React.Fragment>
        );
    }
}

export default BitcoinTrackerEuro;