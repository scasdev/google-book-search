import React, { Component } from 'react';
import './book.css';

class Book extends Component {
  render() {

    return (
      <div className="Book">
            <div className="book__img"><img src={this.props.image} alt={this.props.alt}/> </div>
            <div className="book__title">{this.props.title}</div>
            <div className="book__author">{this.props.author}</div>
            <div className="book__price">{this.props.price}</div>
            <div className="book__description">{this.props.description}</div>
      </div>  
    );
  }
}

export default Book;