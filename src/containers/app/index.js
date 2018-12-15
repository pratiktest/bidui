import React from 'react'
import {  Route, Link } from 'react-router-dom'
import Project from '../home'
import IndividualProject from '../../components/project'
import About from '../about'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Project} />
      <Route exact path="/project/:id" component={IndividualProject} />
    </main>
  </div>
)

export default App
