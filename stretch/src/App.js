import React, { Component } from 'react';
import axios from "axios";
import { Route, NavLink } from 'react-router-dom';
import actionsList from './Components/actionsList'


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [
        {
          id: '',
          project_id: '',
          description: '',
          notes: '',
          completed: ''
        }
      ],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/actions")
      .then(response => this.setState({ actions: response.data }))
      .catch(error => console.log(error));
  }

  updateActions = (newActions) => {
    this.setState({ actions: newActions })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink  to='/' activeStyle={{
                fontWeight: "bold",
                color: "tomato",
                textDecoration: "none" }}>ACTIONS </NavLink>
          <br></br>
        </nav>
        <Route exact path="/" render={props => <actions {...props} actions={this.state.actions} updateActions={this.updateActions} />} />
        <Route path="/actions/:id" render={props => <actions {...props} actions={this.state.actions} />} />
      </div>
    );
  }
}

export default App;