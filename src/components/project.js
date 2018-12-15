import React, { Component } from 'react';
import { Input } from 'antd';
const Search = Input.Search;

class IndividualProject extends Component {

  render() {

    return (
      <div>
        <h1>{this.props.location.title}</h1>
        <div>Project description</div>
        <Search
      placeholder="input search text"
      enterButton="Search"
      size="medium"
      style={{ width: 400 }}
      onSearch={value => console.log(value)}
    />
      </div>
    );
  }
}

export default IndividualProject;