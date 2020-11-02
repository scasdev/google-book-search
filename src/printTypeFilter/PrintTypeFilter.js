import React, { Component } from 'react';

class PrintTypeFilter extends Component {
    
    render() {

      const { printType } = this.props;

      return (
        <div className="PrintTypeFilter">
          <div className="PrintTypeFilter__option">
            <label htmlFor="filter_all">
              <input
                type="radio"
                value="All"
                id="filter_all"
                name="filter"
                checked={printType ==="All"}
                onChange={e => this.props.handlePrintTypeChange(e.target.value)}/>
            All
            </label>
          </div>
          <div className="PrintTypeFilter__option">
            <label htmlFor="filter_uploaded">
              <input
                type="radio"
                value="Uploaded"
                id="filter_uploaded"
                name="filter"
                checked={printType ==="Uploaded"}
                onChange={e => this.props.handlePrintTypeChange(e.target.value)}/>
            Uploaded
            </label>
          </div>
          <div className="PrintTypeFilter__option">  
            <label htmlFor="filter_synced">
              <input
                type="radio"
                value="Synced"
                id="filter_synced"
                name="filter"
                checked={printType ==="Synced"}
                onChange={e => this.props.handlePrintTypeChange(e.target.value)}/>
            Synced
            </label>
          </div>
          <div className="PrintTypeFilter__option">  
            <label htmlFor="filter_new">
              <input
                type="radio"
                value="New"
                id="filter_new"
                name="filter"
                checked={printType ==="New"}
                onChange={e => this.props.handlePrintTypeChange(e.target.value)}/>
            New
            </label>
          </div>
        </div>
      );
    }
  }
  
  export default PrintTypeFilter;