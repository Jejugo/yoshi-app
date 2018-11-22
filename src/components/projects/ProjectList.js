import React from 'react';
import '../../App.css';
import ProjectSummary from './ProjectSummary';

const ProjectList = (props) => {
  return (
    <div className="project-list section">
      <ProjectSummary></ProjectSummary>
      <ProjectSummary></ProjectSummary>
      <ProjectSummary></ProjectSummary>
    </div>
  )
}

export default ProjectList;
