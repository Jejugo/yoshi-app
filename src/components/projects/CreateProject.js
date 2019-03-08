import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {

  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {

    if(e.target.id === 'title'){
      this.setState({
        title: e.target.value
      });
    }
    else{
      this.setState({
        content: e.target.value
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { createProject } = this.props;
    createProject(this.state)
  }

  render() {

    const {title, content} = this.state;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={title} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} value={content}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);