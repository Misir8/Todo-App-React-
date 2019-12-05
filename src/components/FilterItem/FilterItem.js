import React, {Component} from 'react';

class FilterItem extends Component{

    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-info">All</button>
                <button type="button" className="btn">Active</button>
                <button type="button" className="btn">Done</button>
            </div>
        );
    }
}

export default FilterItem;