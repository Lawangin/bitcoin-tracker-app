import React, { Component } from 'react';
import axios from 'axios';

import classes from './BitcoinTracker.module.css';

class BitcoinTracker extends Component {
    state = {
        tracker: null,
        lastUpdate: null
    };

    componentDidMount() {
        let timer = Number(this.props.setValue);
        const getApiInfo = () => {
            let update = null;
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => {
                    update = response.data.time.updated;
                    // return setInterval(() => response.data.bpi.USD.rate, 5000);
                    return response.data.bpi.USD.rate;
                })
                .then(rate => rate.slice(0, 8))
                .then(usdRate => this.setState({ tracker: usdRate, lastUpdate: update}))
                .catch(err => console.log(err));
        };
        getApiInfo();
        this.firstInterval = setInterval(getApiInfo, Number(timer));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.setValue !== this.props.setValue && this.state.tracker !== null) {
            clearInterval(this.firstInterval);
            let timer = Number(this.props.setValue);
            const getApiInfo = () => {
                let update = null;
                axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .then(response => {
                        update = response.data.time.updated;
                        // return setInterval(() => response.data.bpi.USD.rate, 5000);
                        return response.data.bpi.USD.rate;
                    })
                    .then(rate => rate.slice(0, 8))
                    .then(usdRate => this.setState({ tracker: usdRate, lastUpdate: update}))
                    .catch(err => console.log(err));
            };
            getApiInfo();
            this.firstInterval = setInterval(getApiInfo, Number(timer));
        }
    }

    render () {
        const now = new Date().toLocaleTimeString();

        return (
            <React.Fragment>
                <div className={classes.Text}>
                    USD<br />
                    Bitcoin
                </div>
                <div className={classes.BitcoinTracker}>
                    ${this.state.tracker}
                </div>
                <div className={classes.Update}>
                    Last Update: {now}
                </div>
            </React.Fragment>
        );
    }
}

export default BitcoinTracker;