import React, {Component} from 'react';
import './TodoListItem.css'

class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    labelClickHandle = () => {
        this.setState(({done}) => {
           return  {done: !done}
        })
    };
    importantButtonHandle = () => {
      this.setState(({important}) => {
          return {important: !important}
      })
    };
    render() {
        const {label, onDeleteHandle} = this.props;
        const {done, important} = this.state;
        let classNames = "";
        if (done) {
            classNames += "done"
        }

        let classImportant = '';
        if (important){
            classImportant += "text-info font-weight-bold";
        }
        return (
            <>
            <span className={classNames}>
                <span className={classImportant} onClick={() => this.labelClickHandle()}>{label}</span>
            </span>
                <span>
                   <button className="btn btn-outline-danger mr-3" onClick={onDeleteHandle}>
                       <i className="far fa-trash-alt"></i>
                   </button>
                <button className="btn btn-outline-success" onClick={() => this.importantButtonHandle()}>
                    <i className="fas fa-exclamation "></i>
                </button>
               </span>
            </>
        );
    }
}


export default TodoListItem;
