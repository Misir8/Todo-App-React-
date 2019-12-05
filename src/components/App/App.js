import React, {Component} from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchBar from "../SearchBar/SearchBar";
import FilterItem from "../FilterItem/FilterItem";
import TodoList from "../TodoList/TodoList";
import AddListItem from "../AddListItem/AddListItem";

class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            {id: 1, label: "Drink Coffee", important: false},
            {id: 2, label: "Learn React", important: true},
            {id: 3, label: "Have a Lunch", important: false}
        ]
    };

    onDeleteTodoListItem = (id) => {
        if (this.state.todoData.length > 1) {
            this.setState(({todoData}) => {
                // const index = todoData.findIndex(el => el.id === id);
                // const newArr = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
                const newArr = todoData.filter(t => t.id !== id);
                return {todoData: newArr}
            })
        }
    };

    onAddListItemHandle = (text) => {
        const newItem = {
            id: this.maxId ++,
            label: text,
            important: false
        };
        this.setState(({todoData}) =>{
            let newArray = [...todoData, newItem];
            return{todoData: newArray}
        })
    };

    render() {
        const {todoData} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <AppHeader/>
                        <SearchBar/>
                        <FilterItem/>
                        <TodoList onDeleteHandle={(id) => this.onDeleteTodoListItem(id)} todos={todoData}/>
                        <AddListItem onAddListItemHandle={(text) => this.onAddListItemHandle(text)}/>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
        );
    }
};

export default App;