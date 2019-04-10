import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Library from './Components/Library';
import Search from './Components/Search';

class App extends Component {

  constructor(props){
    super(props);
    this.updateBookShelf = this.updateBookShelf.bind(this);
    this.state = { books: null };
  }
  //Receive an array of books and an id that is used to filter the data from API.
  setShelf(books, id){
    let booksFiltered = books;
    if(books !== null){
      booksFiltered.shelf = books.filter((element) =>{
        return element.shelf && element.id !== id;
      });
    }
    this.setState({books});
  }

  //It's used to update the Shelf based on the API method.
  updateBookShelf(bookId, shelf){
    if(shelf === 'none'){
      this.getAllBooks(bookId);
    }
    BooksAPI.update(bookId, shelf)
    .then(() =>{
      this.getAllBooks();
    })
    .catch((e) =>{
      console.log("Error", e);
    });
  }

  //Get all the data from the API and set the state.
  getAllBooks(bookId){
    BooksAPI.getAll().then(result => 
      this.setShelf(result, bookId))
    .catch((e) =>{
      console.log("Error", e);
    });
  }

  //When the component mount the data will be called
  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    //It'll render the Library Component if the path match with '/'.
    return (
      <div>  
        <Route exact path = '/' render = {() => (
          <Library
          updateBookShelf = {this.updateBookShelf} 
          books = {this.state.books} />
      )}></Route>
          <Route path = '/search' render = {() => (
            <Search 
            updateBookShelf = {this.updateBookShelf}
            books = {this.state.books} />
      )}/>
      </div>
      );
    //It'll render the Search Component if the path match with '/search'.
  }
}

export default App;
