const defaultState = {
  post: []
}


const CREATE = 'create-post'


export const postReducer = (state = defaultState, action) => {

  switch (action.type) {
    case CREATE:
      return {...state, post: [...state.post, action.payload]}

    default:
      return state
  }
}

export const CreatePostReducer = (payload) => ({type: CREATE, payload})