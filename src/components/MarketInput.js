import React, { Component } from 'react';


export default class MarketInput extends Component {
  constructor(){
    super();
  };
  render(){
    return (
      <div>
          <label>Enter Market</label><br />
          <input type="text" ref="title"
            onChange={(e) => this.props.handleChange(e.target.value)} />
      </div>
    )
  }
}
