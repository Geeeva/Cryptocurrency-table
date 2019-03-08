import React, { Component } from 'react';
import MarketData from '../components/MarketData/MarketData';
import 'normalize.css';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cryptos: [], 
            directionRank: {
                rank: 'asc'
            },
            directionSymbol: {
                symbol: 'asc'
            },
            directionName: {
                name: 'asc'
            },
            directionPrice: {
                price_usd: 'asc'
            },
            error: ''
        }
    }

    sortByRankHandler = (key) => {
        this.setState({
            cryptos: this.state.cryptos.sort((a, b) => (
                this.state.directionRank[key] === 'asc'
                ? 
                  parseFloat(a[key]) - parseFloat(b[key])
                : parseFloat(b[key]) - parseFloat(a[key])
            )),

            directionRank: {
                [key]: this.state.directionRank[key] === 'asc'
                ? 'desc'
                : 'asc'
            }
        })
    }

    sortByNameHandler = (key) => {
        this.setState({
            data: this.state.cryptos.sort((a, b) => {
                const asc = this.state.directionName[key] === 'asc'; //Ako je "asc" u const asc smjesta true, ako je suprotno false
                if (a[key] < b[key]) { //Ako je a od symbol manje od b od symbol 
                    return asc ? -1 : 1; //Ako je asc true vraca -1, ako nije vraca 1
                } else if (a[key] > b[key]) {
                    return asc ? 1 : -1; //Ako je asc true vraca -1, ako nije vraca 1
                } else {
                    return 0;
                }
            }),

            directionName: {
                [key]: this.state.directionName[key] === 'asc'
                ? 'desc'
                : 'asc'
            }
        })
    }

    sortBySymbolHandler = (key) => {
        this.setState({
            cryptos: this.state.cryptos.sort((a, b) => {
                const asc = this.state.directionSymbol[key] === 'asc'; //Ako je "asc" u const asc smjesta true, ako je suprotno false
                if (a[key] < b[key]) { //Ako je a od symbol manje od b od symbol 
                    return asc ? -1 : 1; //Ako je asc true vraca -1, ako nije vraca 1
                } else if (a[key] > b[key]) {
                    return asc ? 1 : -1; //Ako je asc true vraca -1, ako nije vraca 1
                } else {
                    return 0;
                }
            }),

            directionSymbol: {
                [key]: this.state.directionSymbol[key] === 'asc'
                ? 'desc'
                : 'asc'
            }
        })
    }

    sortByPriceHandler = (key) => {
        this.setState({
            cryptos: this.state.cryptos.sort((a, b) => (
                this.state.directionPrice[key] === 'asc'
                ? 
                  parseFloat(a[key]) - parseFloat(b[key])
                : parseFloat(b[key]) - parseFloat(a[key])
            )),

            directionPrice: {
                [key]: this.state.directionPrice[key] === 'asc'
                ? 'desc'
                : 'asc'
            }
        })
    }

    componentDidMount () {
        axios.get('https://api.coinlore.com/api/tickers/')
        .then(response => {
            const cryptos = response.data.data;
            this.setState({
                cryptos: cryptos
            })
        })
        .then(error => console.log(this.state.error));
    }

    render() {
        let date = new Date().toDateString();
        return (
            <div className="App">
                <div className="container-fluid container-table100">
                    <div className="container">
                        <h1 className="box-with-text">Cryptocurrency ranking on {date}</h1>
                        <div className="table100 ver6 m-b-110">
                            <MarketData
                                cryptos={this.state.cryptos}
                                sortByRank={this.sortByRankHandler} 
                                sortByName={this.sortByNameHandler}
                                sortBySymbol={this.sortBySymbolHandler}
                                sortByPrice={this.sortByPriceHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
