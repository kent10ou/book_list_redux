// State argument is not application state, only the state this reducer is responsible for.
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}

/*
- all reducers get two arguments: the current state and action
- reducers are only called when an action occurs
- important that we never mutate our current state to produce a new version of state
*/
