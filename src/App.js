import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    toDoList:[]
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target[0].value)
    let taskDesc = e.target[0].value // get the value from form and assign it to the variable
    if (taskDesc.length > 0) {
      this.setState({
        toDoList: [...this.state.toDoList, taskDesc] // using spread operator to make the value of the current value of the state and adds the new input after the got submitted
      })
      e.target.reset(); // clear the form after submitting
    }
  }

  deleteItem = (item,index) => {
    console.log( "index:",index)
    let taskArray = [...this.state.toDoList]
    taskArray.splice(index,1)
    this.setState({
      toDoList:taskArray
    })
  }

  render() {
    return (
      <div>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-2">Todos App</h1>
            </div>
          </div>
          <form className="mb-3" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="input-group">
              <input type="text" name="todoTask" className="form-control" placeholder="Please enter your task " autoComplete="off"></input>
              <div className="input-group-append">
              <button type="submit" className="btn btn-outline-success"> Add</button>
              </div>
            </div>
            <ul className="list-group">
              {
                this.state.toDoList.map((item, index) => 
              <li key={index} className="list-group-item">
                {item}
                <button type="submit" className="btn btn-sm btn-outer-danger float-right" onClick={(event) => this.deleteItem(item, index)}> 
                delete
                </button>
              </li>)
              }
            </ul>
          </form>
          
      </div>
    );
    }
}

export default App;
