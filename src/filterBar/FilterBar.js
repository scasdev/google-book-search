import React, { Component } from 'react';
import './filterBar.css'; 
import PrintTypeFilter from '../printTypeFilter/PrintTypeFilter';
import BookTypeFilter from '../bookTypeFilter/BookTypeFilter';

class FilterBar extends Component {
    render() {
        return (
            <div className="FilterBar">
                <PrintTypeFilter 
                printType={this.props.printType}   
                handlePrintTypeChange={option => this.props.handlePrintTypeChange}/>
                <BookTypeFilter 
                bookType={this.props.bookType}
                handleBookTypeChange={option => this.handleBookTypeChange}
                />
            </div>
        )
    }
}

export default FilterBar