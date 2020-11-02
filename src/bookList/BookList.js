import React, { Component } from 'react';
import './bookList.css';
import Book from '../book/Book';

class BookList extends Component {
  render() {
    console.log(this.props.books)
    console.log('books logged')
    const books = this.props.books.map((book, i) => <Book { ...book} key={i}/>);
    return (
      <div className="BookList">
        {books}
      </div>
    );
  }
}

BookList.defaultProps = {
  books: []
};


export default BookList;
