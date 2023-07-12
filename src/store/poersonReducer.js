const defaultState = {
  post: []
}


const CREATE = 'create-post'
const DELETE = 'delete-post'


export const postReducer = (state = defaultState, action) => {

  switch (action.type) {
    case CREATE:
      return {...state, post: [...state.post, action.payload]}
    case DELETE:
      return {...state, post: state.post.filter((post) => {return post.name !== action.payload})}

    default:
      return state
  }
}

export const CreatePostReducer = (payload) => ({type: CREATE, payload})
export const DeletePostReducer = (payload) => ({type: DELETE, payload})