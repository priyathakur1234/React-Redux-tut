import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/'Component={Dashboard} />
            <Route path='/project/:id' Component={ProjectDetails} />
            <Route path='/signin' Component={SignIn} />
            <Route path='/signup' Component={SignUp} />
            <Route path='/create' Component={CreateProject} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;