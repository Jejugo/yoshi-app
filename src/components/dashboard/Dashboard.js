import React, { Component } from 'react';
import '../../App.css';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList></ProjectList>
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications></Notifications>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);
