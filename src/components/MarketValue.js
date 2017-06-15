import React, { Component } from 'react';


export default class MarketValue extends Component{
  constructor() {
    super();
  }

  render () {
    let { marketName, value } = this.props;
    return (
        <div>
          <span>{ marketName } = ${ value }</span>
        </div>
    )
  }
}
