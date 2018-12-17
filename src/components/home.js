import React, { Component } from 'react';
import { Card, Col, Row, Tag, Pagination } from 'antd';
import ProjectApi from '../api/projectapi';
import HistoryApi from '../api/hitoryapi';
import { withRouter } from "react-router-dom";
import moment from 'moment';

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    console.log("component mounted");
    ProjectApi.getAllProjects(0,3).then(res => {
      console.log(res);
      this.setState({projects:res})
    })
  }

  onChange = (pageNumber) =>{
    let page = pageNumber - 1;
    ProjectApi.getAllProjects(page,3).then(res => {
      console.log(res);
      this.setState({projects:res})
    })
  }

  goToProject = (id, title, description) => {
    let bidderId = this.props.location.id
    this.props.history.push({pathname:`/bidder/${bidderId}/project/${id}`, title, description:description, bidderId:this.props.location.id, projectId:id});
  }
  render() {

    console.log(this.state.projects)
    let projects;
    if(this.state.projects){
        let i=0;
        projects = this.state.projects.map((project) => {
        return <Col span={8}>
                <Card  hoverable style={{marginBottom:20}} title={project.title} bordered={false} onClick={(e)=>this.goToProject(project.id, project.title, project.description)} bordered={true}>
                <Tag color="green">expires : {moment(project.expiry).fromNow()}</Tag>
                <Tag color="orange">min bid : {project.minPrice}</Tag>
                </Card>
              </Col>
  
      });
    }
    

    return (
      <div>
        <Row gutter={16}>
          {projects}
        </Row>
          <div>
           <Pagination style={{paddingLeft:20}} defaultCurrent={1} total={500} onChange={this.onChange} />
          </div>
      </div>

    );
  }
}

export default withRouter(Project);
