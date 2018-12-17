import React from 'react'
import {  Route, Link } from 'react-router-dom'
import Project from '../home'
import IndividualProject from '../../components/project'
import Login from '../../components/login'
import About from '../about'
import { black } from 'ansi-colors';

const App = () => (
  <div>
  <header style={{ paddingBottom:20}}>
    <div>
      <center>Bidding Server Application</center>
    </div>
  </header>

    <main>
      <Route exact path="/bidder/:id/projects" component={Project} />
      <Route exact path="/" component={Login} />
      <Route exact path="/bidder/:buyerId/project/:id" component={IndividualProject} />
    </main>
  </div>
)

export default App
