import React, { Component } from 'react';
import './searchBox.css';

class SearchBox extends Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.handleSearchUpdate(e.target.searchTerm.value)
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input
                    name="searchTerm"
                    type="text"
                    placeholder="Search term"
                />
                <button type='submit'>search</button>
            </form>
        )
    }
}

export default SearchBox