import React from 'react';
import '../../App.css';

const ProjectDetails = (props) => {

  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-o">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Bla bla bla bla bla</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Net Ninja</div>
          <div>2nd September</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;
