import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Shelf from './Shelf';

class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchedBooks: null
    };
  }

  //Use the search method from the API to set the state of the component.
  searchBook(terms){
    BooksAPI.search(terms).then((result) =>{
      if(result){
        this.setState({searchedBooks: this.filter(result)});
      }
    }).catch((e) =>{
      console.log("Error", e);
    });
  }

  filter(books){
    const booksWithShelf = this.props.books
      return books.map((book) => {
        const booksFound = booksWithShelf.find(myBook => myBook.id === book.id);
        book.shelf = booksFound ? booksFound.shelf : 'none'
        return book;
    })
  }

  render() {
    //Render the first HTML of the Search page.
    return <div>
    <div className="input-group input-group-lg">
    <div className="input-group-prepend">
    <Link className="input-group-text" to = '/'><i className ="fas fa-arrow-left"></i></Link>
    </div>
    <input
      onChange = {(event) => this.searchBook(event.target.value)}
      placeholder = "Search for a title or an Author..."
      type="text"
      className="form-control"
      aria-label="Search for a title or an Author"
      aria-describedby="inputGroup-sizing-lg">
    </input>
    
    </div>
    <Shelf
      updateBook = {this.props.updateBookShelf} 
      title = "Results" 
      books = {this.state.searchedBooks} />
    </div>
  }
}

export default Search;
