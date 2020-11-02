import React, { Component } from 'react';
import './App.css'; 
import SearchBar from './searchBar/SearchBar';
// import FilterBar from './filterBar/FilterBar';
import BookList from './bookList/BookList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      books: [],
      showSearchResults: false
      // printType: 'All',
      // bookType: 'No Filter'
    };
  }

  updateSearchTerm(term) {
    const searchURL = 'https://www.googleapis.com/books/v1/volumes?q=';    
    const key = '&key=AIzaSyB87GRgR_eUY8X4yv3qKmT0LZdRh0oiVc8';
    const url = searchURL + term + key
    // const url = "https://www.googleapis.com/books/v1/volumes?q=malcom&key=AIzaSyB87GRgR_eUY8X4yv3qKmT0LZdRh0oiVc8"
    
    console.log(url);

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json() 
      )
      .then(data => {
        console.log(data)
        this.setState({
          books: data,
          error: null
        });
        console.log(this.state)
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  // updatePrintType(option) {
  //   this.setState({
  //     printType: option
  //   })
  // }

  // updateFilterBookType(option) {
  //   this.setState({
  //     bookType: option
  //   })
  // }

render () {
const page = this.state.showSearchBookList
? this.state.books.length < 0
: <BookList
handleSearchUpdate={term=>this.updateSearchTerm(term)}  
books={this.state.books}/>

  return (
    <div className='App'>
      <header>
        <h1>Google Book Search</h1>
      </header>
      <main>
        <SearchBar
        searchTerm={this.state.searchTerm}
        handleSearchUpdate={term=>this.updateSearchTerm(term)}
        />

        {/* <FilterBar
         printType={this.state.printType}   
         bookType={this.state.printType}  
         handlePrintTypeChange={option => this.updatePrintType(option)}
         handleBookTypeChange={option => this.updateFilterBookType(option)}                  
        /> */}
        
        {page}
        {/* printType={this.state.printType}   
        bookType={this.state.printType} */}
      </main>
    </div>
  );
}
}

export default App;