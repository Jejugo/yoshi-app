import React from 'react';
import '../../App.css';
import { connect } from 'react-redux';

//necessary to TELL firebase which collection to retrieve
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

const ProjectDetails = (props) => {

  const { project } = props;
  console.log(props);

  return (
    project !== null ? (
      <div className="container section project-details">
      <div className="card z-depth-o">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by {`${project.authorFirstName} ${project.authorLastName}`}</div>
        </div>
      </div>
    </div>
    ) : (
      <div className="container center">
      <p> Loading Project... </p>
      </div>

    )
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null

  return {
    project: project
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails);
