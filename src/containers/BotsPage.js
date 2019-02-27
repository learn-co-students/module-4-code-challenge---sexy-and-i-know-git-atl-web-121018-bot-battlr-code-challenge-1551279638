import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(res => res.json()).then(bots => {
      this.setState({bots: bots})
    })
  }

  render() {
    return (
      <div>
        <BotCollection />
      </div>
    );
  }

}

export default BotsPage;
