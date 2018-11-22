import React, { Component } from 'react';
import '../App.css'
import { Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/projectDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' render={() => (
            <Dashboard></Dashboard>
          )}></Route>
          <Route path='/project/:id' render={(history) => (
            <ProjectDetails {...history}></ProjectDetails>
          )}></Route>
          
        </Switch>
       
      </div>
    );
  }
}

export default App;
