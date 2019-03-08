import React, { Component } from 'react';
import '../App.css'
import { Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/projectDetails';
import SignIn from './auth/Signin';
import SignUp from './auth/SignUp';
import CreateProject from './projects/CreateProject';

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
          <Route path='/signin' render={(history) => (
            <SignIn></SignIn>
          )}></Route>
          <Route path='/signup' render={(history) => (
            <SignUp></SignUp>
          )}></Route>
          <Route path='/create' render={(history) => (
            <CreateProject></CreateProject>
          )}></Route>
        </Switch>
       
      </div>
    );
  }
}

export default App;
