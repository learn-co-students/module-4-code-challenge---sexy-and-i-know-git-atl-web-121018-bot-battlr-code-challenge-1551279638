import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";


const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()

    this.state = {
      bots: [],
      botArmy: [],
      renderMe: true,
      selectedBot: null
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
      this.setState({
        renderMe: false,
        selectedBot: bot
      })
    }
  } 

  addBot = (bot) => {
    const newBotArmy = [...this.state.botArmy, bot]
    this.setState({
      botArmy: newBotArmy,
      renderMe: true    
    })
  }

  showAll = () => {
		this.setState({
			renderMe: true
		})
	}

  render() {
    
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} handleBot={this.handleBot}/> 
        {this.state.renderMe === true ? <BotCollection bots={this.state.bots} handleBot={this.handleBot}/> : <BotSpecs bot={this.state.selectedBot} handleBot={this.handleBot} showAll={this.showAll} addBot={this.addBot}/>}
      </div>
    );
  }
}

export default BotsPage;
