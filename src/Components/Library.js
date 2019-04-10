import React from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

function Library({books, updateBookShelf}){
  //Use the Shelf Component to load the HTML needed.
    return <div>
      <header><h1>Welcome to MyReads!</h1></header>  
        <Shelf 
        updateBook = {updateBookShelf} 
        title = "Currently Reading" 
        books = {books ? books.filter((element) => element.shelf === "currentlyReading"):null} />
        <Shelf 
        updateBook = {updateBookShelf} 
        title = "Want to Read" 
        books = {books ? books.filter((element) => element.shelf === "wantToRead"):null} />
        <Shelf 
        updateBook = {updateBookShelf} 
        title = "Read" 
        books = {books ? books.filter((element) => element.shelf === "read"):null} />
        <Link className = "btn-search" to = '/search'><i className = "fas fa-search"></i></Link>
    </div>
}

export default Library;
