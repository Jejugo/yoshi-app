export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERR = 'CREATE_PROJECT_ERR';

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Jeff',
      authorLastName: 'Goes',
      authorId: '12345',
      createdAt: new Date()
    }).then(() => {
      dispatch({type: CREATE_PROJECT, project});
    }).catch((e) => {
        dispatch({type: CREATE_PROJECT_ERR, e});
    });
  }
}