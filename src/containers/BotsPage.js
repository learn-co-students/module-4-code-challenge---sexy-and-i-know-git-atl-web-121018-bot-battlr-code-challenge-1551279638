import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    enlistedBots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(res => res.json()).then(bots => {
      this.setState({bots: bots})
    })
  }

  enlistBot = (bot) => {
    this.setState({enlistedBots: [...this.state.enlistedBots, bot]})
  }

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot} />
        <YourBotArmy bots={this.state.enlistedBots} />
      </div>
    );
  }

}

export default BotsPage;
