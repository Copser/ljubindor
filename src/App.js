import React, { Component } from 'react';
import $ from 'jquery';
import uuid from 'uuid';
import MarketInput from './components/MarketInput';
import MarketValue from './components/MarketValue';



class App extends Component {

  handleCheckMarket(market){
    switch (market) {
      case "safex":
        this.getSafexValue();
        break;
      case "btc":
        this.getBitCoinValue();
        break;
      case "eth":
        this.getEthereumCoinValue();
        break;
      default:
        console.log("Unknown market: " + market);
    }
  }

  constructor(){
    super();
    this.state = {
      currentMarketValue: null,
      currentMarketName: null
        }

      this.handleCheckMarket = this.handleCheckMarket.bind(this);
    }

  getSafexValue () {
        $.ajax({
        // url: 'https://api.coinmarketcap.com/v1/ticker/safe-exchange-coun/',
        url: 'https://api.coinmarketcap.com/v1/ticker/safe-exchange-coin/',
        dataType: 'json',
        cashe: false,
        success: function(data){
          this.setState({
            currentMarketValue: data[0].price_usd,
            currentMarketName: data[0].name
          })
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      })
    }

  getBitCoinValue () {
        $.ajax({
        // url: 'https://api.coinmarketcap.com/v1/ticker/safe-exchange-coun/',
        url: 'https://poloniex.com/public?command=returnTicker',
        dataType: 'json',
        cashe: false,
        success: function(data){
          this.setState({
            currentMarketValue: data.BTC_BCN.last,
            currentMarketName: "BTC_BCN"
          })
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      })
    }

  getEthereumCoinValue () {
        $.ajax({
        url: 'http://omniexplorer.info/ask.aspx?api=getmetadexlastprice&prop=1&desprop=96',
        dataType: 'json',
        cashe: false,
        success: function(data){
          this.setState({
            currentMarketValue: data.prop,
            currentMarketName: data.desprop
          })
        }.bind(this),
        error: function(xhr, status, err){
          if (status == 200) {
            console.log("pobeda")
          }
          console.log(err);
        }
      })
    }

  render() {
    return (
      <div>
        <h3>Add Project</h3>
          <MarketInput handleChange={this.handleCheckMarket} />
          <MarketValue marketName={this.state.currentMarketName} value={this.state.currentMarketValue} />
      </div>
    );
  }
}

export default App;
