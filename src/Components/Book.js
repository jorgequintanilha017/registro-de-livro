import React, { Component } from 'react';

class Book extends Component {

  //Used to call the API method and update the Shelf.
  moveTo(choose){
    const book = this.props;
    switch(choose){
        case 'C':
            this.props.updateBookShelf(book, 'currentlyReading');
        break;
        case 'W':
            this.props.updateBookShelf(book, 'wantToRead');
        break;
        case 'R':
            this.props.updateBookShelf(book, 'read');
        break;
        case 'N':
            this.props.updateBookShelf(book, 'none');
            break;
        default:
        console.log(`${choose} isn't a valid argument!`);
    }
  }

  //Load the basic HTML of the book.
  render() {
    return (
        <div className = "book">
        <div>
            <img src = {this.props.src}  className = "card-img-top shadow" alt="book"></img>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle shadow" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                <button onClick = {() => this.moveTo('C')} className="dropdown-item" type="button">Currently Reading</button>
                <button onClick = {() => this.moveTo('W')} className="dropdown-item" type="button">Want to Read</button>
                <button onClick = {() => this.moveTo('R')} className="dropdown-item" type="button">Read</button>
                <button onClick = {() => this.moveTo('N')} className="dropdown-item" type="button">None</button>
            </div>
        </div>

        </div>
            <div className = "card-body">
                <h5 className = "card-title">{this.props.title}</h5>
                <p className = "card-text">{this.props.author}</p>
                <p>Shelf: {this.props.shelf ? this.props.shelf : "none"}</p>
            </div>
        </div>
    );
  }
}

export default Book;
