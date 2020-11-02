import React, { Component } from 'react';
import './searchBar.css'; 
import SearchBox from '../searchBox/SearchBox';

class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <SearchBox
                 searchTerm={this.props.searchTerm}
                 handleSearchUpdate={this.props.handleSearchUpdate}/>
            </div>
        )
    }
}

export default SearchBar