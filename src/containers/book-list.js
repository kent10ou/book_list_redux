import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(BookList);
// connect() takes a function and a component and produces a container
/*
A container (smart component) is a React component that has a direct connection to the state managed by redux
Redux is the data, React is the view - react-redux library -> a component that is aware of the state managed by redux. react-redux is the glue b/w the 2 libs
- we only create containers out of components that care about a particular piece of state
- Only the most parent component that uses a particular piece of state needs to be connnected to redux

whenever our app state changes,
*/
