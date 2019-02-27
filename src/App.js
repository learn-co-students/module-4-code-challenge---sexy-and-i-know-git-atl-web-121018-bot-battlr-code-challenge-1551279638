import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  

  state = {
    bots: []
  }



  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => this.setState({ bots: data }))
  }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} />
      </div>
    );
  }
}

export default App;
