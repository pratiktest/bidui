import React, { Component } from 'react';
import { Card, Col, Row, Input, Button} from 'antd';
import ProjectApi from '../api/projectapi';
import { withRouter } from "react-router-dom";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sellerUsername: "",
      buyerUsername: ""
    };
  }

  sellerLogin = (name) => {
    console.log(name);
  }

  buyerLogin = (name) => {
    ProjectApi.getBuyer(name).then(res => {
      console.log(res);
      let id = res.id
      this.props.history.push({pathname:`/bidder/${res.id}/projects`, id});
    })
  }

  render() {
    return (
      <div>

        <Row>
          <Card>
            <Col span={6}>
              <Input onChange={(e) => this.setState({buyerUsername:e.target.value})} placeholder="username" />
              <Input placeholder="password" />
              <Button onClick={(e) => this.buyerLogin(this.state.buyerUsername)}>Buyer Login</Button>
            </Col>
          </Card>
          <Card>
            <Col span={6}>
              <Input onChange={(e) => this.setState({sellerUsername:e.target.value})} placeholder="username" />
              <Input placeholder="password" />
              <Button onClick={(e) => this.sellerLogin(this.state.sellerUsername)}>Seller Login</Button>
            </Col>
          </Card>
        </Row>
      </div>

    );
  }
}

export default withRouter(Login);
