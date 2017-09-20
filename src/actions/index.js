export function selectBook (book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}


/*
actions flow:
- user clicks something - calls action creator
  - an action creator is a function that returns an object (an action)
- actions automatically sent to all reducers
- modifies the state set to the value returned from the reducer
- all reducers processed the action and returned new state. New state has been assembled. Notify containers of the change to state.
on notification, containers will rerender with new props. 

* an action always contains a type and sometimes contains a payload

*/