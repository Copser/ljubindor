import React, { Component } from 'react';
import $ from 'jquery';
import uuid from 'uuid';



class Main extends Component {
  handleCheckMarket(market){
    switch (market) {
      case "safex":

        break;
      default:
        console.log("Unknown market: " + market);
    }
  }

  constructor(){
    super();
    this.state = {
      currentMarketValue: null
        }
    }

    getSafexValue(){
        $.ajax({
        // url: 'https://api.coinmarketcap.com/v1/ticker/safe-exchange-coun/',
        url: 'https://api.coinmarketcap.com/v1/ticker/safe-exchange-coin/',
        dataType: 'json',
        cashe: false,
        success: function(data){
          this.setState({currentMarketValue: data[0].price_usd})
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      })
    }

  getSafexValue(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      // url: 'https://api.coinmarketcap.com/v1/ticker/safe-exchange-coin/',
      dataType: 'json',
      cashe: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state)
        })
      }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      })
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <MarketInput handleChange={this.handleCheckMarket} />
          <div>
            <label>Category</label><br />
            <select ref="category">
                {categoryOptions}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
