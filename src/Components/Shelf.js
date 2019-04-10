/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {

  //Treat the array of authors from the API.
  treatAuthor(authors){
    if(authors){
      if(authors.length > 1){
        return authors.map((author) => author + ' ');
      }
    }
    return authors;
  }

  //Map through all the components calling the Book
  //Component and pass the correct Props.
  render() {
    const books = this.props.books;
    const cmpBooks = books && Array.isArray(books)
    ? books.map((element) =>
        element !== undefined && element.imageLinks && element.authors ?
        <Book 
        updateBookShelf = {this.props.updateBook} 
        title = {element.title}
        key = {element.id} 
        src = {element.imageLinks.thumbnail}
        author = {this.treatAuthor(element.authors)}
        id = {element.id}
        shelf = {element.shelf} />:null
    ) :null ;
    return (
      <div className = "container">
        <div>
          <h2 className = "shelf-title pt-4 pb-4">{this.props.title}</h2>
          <div className = "d-flex flex-wrap justify-content-around text-center m-5">
          {cmpBooks}
          </div>
        </div>
      </div>
      );
  }
}

export default Shelf;
