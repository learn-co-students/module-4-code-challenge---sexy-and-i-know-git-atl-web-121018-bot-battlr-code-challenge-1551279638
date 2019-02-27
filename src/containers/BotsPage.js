import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()

    this.state = {
      bots: [],
      botArmy: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(botData => {
      this.setState({
        bots: botData
      })
    })
  }  

  handleBot = (bot) => {
    if (this.state.botArmy.includes(bot)) {
      const newBotArmy = this.state.botArmy.filter(botObj => botObj.id !== bot.id)
      this.setState({
        botArmy: newBotArmy
      })
    } else {
      const newBotArmy = [...this.state.botArmy, bot]
      console.log("newbotarmy", newBotArmy)
      this.setState({
        botArmy: newBotArmy
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} handleBot={this.handleBot}/> 
        <BotCollection bots={this.state.bots} handleBot={this.handleBot}/> 
      </div>
    );
  }

}

export default BotsPage;
