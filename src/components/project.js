import React, { Component } from 'react';
import { Input, Alert, message } from 'antd';

import ProjectApi from '../api/projectapi';

const Search = Input.Search;

class IndividualProject extends Component {

  placeBid = (bidderId, projectId, value) => {
    let bid = {price:value}
    ProjectApi.placeBid(bidderId, projectId, bid).then(res => {
      if(res.ok){
        message.success('Your bid is placed', 3);
      }
      console.log(res)
    }).catch(err => console.log(err))
  }

  render() {

    

    return (
      <div>
        <center>
        <h1>{this.props.location.title}</h1>
        <div style={{ paddingBottom:20}}>{this.props.location.description}</div>
        <Search
      placeholder="place bid"
      enterButton="Bid"
      size="medium"
      style={{ width: 400}}
      onSearch={value => this.placeBid(this.props.location.bidderId, this.props.location.projectId, value)}
    />
    <Alert style={{width:400, marginTop:20}} message="All bids are hourly bids. Salary is calculated as 8hrs/day  " type="info" showIcon />
    </center>
      </div>
    );
  }
}

export default IndividualProject;