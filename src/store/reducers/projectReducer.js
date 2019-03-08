import { CREATE_PROJECT } from '../actions/projectActions';
import { CREATE_PROJECT_ERR } from '../actions/projectActions';

const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'help me find yoshi', content: 'blah blah blah'},
    {id: '3', title: 'help me find mario', content: 'blah blah blah'},
  ],
  teste: 'teste'
}

export const projectReducer = (state = initState, action) => {
  switch (action.type){
    case CREATE_PROJECT:
      console.log("created Project", action.project);
      return state;
    case CREATE_PROJECT_ERR:
      console.log('create project err', action.e);
      return state;
    default:
      return state;
    }
}

export default projectReducer;