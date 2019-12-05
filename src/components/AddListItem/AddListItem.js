import React, {Component} from 'react';

class AddListItem extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.onAddListItemHandle('Hello World')}
                        className="btn btn-outline-success float-right mt-3">Add to Item
                </button>
            </div>
        );
    }
}

export default AddListItem;