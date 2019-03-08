import React from 'react';
import '../../App.css';
import ProjectSummary from './ProjectSummary';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//necessary to TELL firebase which collection to retrieve
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

const ProjectList = (props) => {

  const { projects } = props;
  console.log("projetos renderizados");
  console.log(projects);

  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id}>
            <ProjectSummary project={project} key={project.id}></ProjectSummary>
          </Link>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects
  }
}

//compose is used to add a new function to the enhancement of the component Project List. Connect give the component a dispatch argument whereas firestoreConnect syncs the documents in firebase to our store.
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects'}
  ])
)(ProjectList)
