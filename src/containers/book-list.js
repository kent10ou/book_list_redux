import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // returns an object, whatever is returned will be available to component as props inside of BookList
  // whenever our app state changes, our container will rerender
  return {
    books: state.books
  }
}

// anything returned from this function will end up as props on the BookList Container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect() takes a function and a component and produces a container
// promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

/*
A container (smart component) is a React component that has a direct connection to the state managed by redux
Redux is the data, React is the view - react-redux library -> a component that is aware of the state managed by redux. react-redux is the glue b/w the 2 libs
- we only create containers out of components that care about a particular piece of state
- Only the most parent component that uses a particular piece of state needs to be connnected to redux


- action creator is a function that returns an action
- action creator returns an object, that object is then automatically sent to ALL the different reducers inside our application
- reducers can choose depending on the action to return a different piece of state depending on what the action is
    that newly piece of state then gets piped into the application state then the application state then gets pumped back into our react application
    which causes all of our components to rerender

Flow:
1. User clicks - calls action creator
2. Action creator returns an action
3. Action automatically sent to all reducers
4. property on state set to value returned from the reducers
5. All reducers processed the action and returned new state. New state has been assembled. Notify containers of the changes to state.
    On notification, containers will rerender with new props
*/
