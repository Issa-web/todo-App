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
  
          </form>
      </div>
    );
    }
}

export default App;
