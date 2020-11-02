import React, { Component } from 'react';

class BookTypeFilter extends Component {
    
    render() {

      const { bookType } = this.props;

      return (
        <div className="BookTypeFilter">
          <div className="BookTypeFilter__option">
            <label htmlFor="filter_all">
              <input
                type="radio"
                value="All"
                id="filter_all"
                name="filter"
                checked={bookType ==="All"}
                onChange={e => this.props.handleBookTypeChange(e.target.value)}/>
            All
            </label>
          </div>
          <div className="BookTypeFilter__option">
            <label htmlFor="filter_uploaded">
              <input
                type="radio"
                value="Uploaded"
                id="filter_uploaded"
                name="filter"
                checked={bookType ==="Uploaded"}
                onChange={e => this.props.handleBookTypeChange(e.target.value)}/>
            Uploaded
            </label>
          </div>
          <div className="BookTypeFilter__option">  
            <label htmlFor="filter_synced">
              <input
                type="radio"
                value="Synced"
                id="filter_synced"
                name="filter"
                checked={bookType ==="Synced"}
                onChange={e => this.props.handleBookTypeChange(e.target.value)}/>
            Synced
            </label>
          </div>
          <div className="BookTypeFilter__option">  
            <label htmlFor="filter_new">
              <input
                type="radio"
                value="New"
                id="filter_new"
                name="filter"
                checked={bookType ==="New"}
                onChange={e => this.props.handleBookTypeChange(e.target.value)}/>
            New
            </label>
          </div>
        </div>
      );
    }
  }
  
  export default BookTypeFilter;