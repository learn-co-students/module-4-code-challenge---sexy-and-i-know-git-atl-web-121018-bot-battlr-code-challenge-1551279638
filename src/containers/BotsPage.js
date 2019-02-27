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

  toggleEnlist = (bot) => {
    let newEnlistedBots

    if (this.state.enlistedBots.includes(bot)) {
      newEnlistedBots = [...this.state.enlistedBots]
      newEnlistedBots.splice(newEnlistedBots.indexOf(bot), 1)
    } else {
      newEnlistedBots = [...this.state.enlistedBots, bot]
    }
    console.log(newEnlistedBots);
    this.setState({enlistedBots: newEnlistedBots})
  }

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} toggleEnlist={this.toggleEnlist} />
        <YourBotArmy bots={this.state.enlistedBots} toggleEnlist={this.toggleEnlist} />
      </div>
    );
  }

}

export default BotsPage;
