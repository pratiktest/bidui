import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import ProjectApi from '../api/projectapi';
import HistoryApi from '../api/hitoryapi';
import { withRouter } from "react-router-dom";

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    console.log("component mounted");
    ProjectApi.getAllProjects().then(res => {
      console.log(res);
      this.setState({projects:res})
    })
  }

  goToProject = (id, title) => {
    this.props.history.push({pathname:`/project/${id}`, title});
  }
  render() {

    console.log(this.state.projects)
    let projects;
    if(this.state.projects){
        let i=0;
        projects = this.state.projects.map((project) => {
        return <Col span={8}>
                <Card  hoverable style={{marginBottom:20}} title="Card title" bordered={false} onClick={(e)=>this.goToProject(project.id, project.title)} bordered={true}>
                {project.id}
                </Card>
              </Col>
  
      });
    }
    

    return (
      <Row gutter={16}>
        {projects}
      </Row>
    );
  }
}

export default withRouter(Project);
