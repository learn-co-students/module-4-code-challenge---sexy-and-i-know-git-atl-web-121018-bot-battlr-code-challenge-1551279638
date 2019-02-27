import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
// import BotCard from "../components/BotCard"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one


  constructor(props) {
    super(props)

    this.state = {
      botList: [],
      enlisted: [],
      showBot: null
    }
  }

  displaySpecs = (bot) => {
    // console.log(bot)
    this.setState({
      showBot: bot
    })
  }

  // makeCards = (bots) => {
  //   return bots.map(bot => {
  //     return <BotCard bot={bot} enlist={this.enlist}/>
  //   })
  // }


  enlist = (bot) => {
    // console.log(bot)
    // console.log(this.state.enlisted)
    if (this.state.enlisted.includes(bot)) return
    this.setState({
      enlisted: this.state.enlisted.concat(bot)
    })
  }

  unenlist = (bot) => {
    // const index = this.state.enlisted.indexOf(bot)
    // let newArmy = []
    // if (index > -1) {
    //   newArmy = this.state.enlisted.splice(index, 1);
    // }
    let newArmy
    newArmy = this.state.enlisted.filter((army) => {
      if (army !== bot) {
        return army
      }
    })

    this.setState({
      enlisted: newArmy
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy enlisted={this.state.enlisted} enlist={this.unenlist}/>
        {this.state.showBot ? <BotSpecs bot={this.state.showBot} enlist={this.enlist} displaySpecs={this.displaySpecs}/>
        :
        <BotCollection botList={this.state.botList} enlist={this.enlist} displaySpecs={this.displaySpecs}/>}
        {/* put your components here */}
      </div>
    );
  }


  componentDidMount() {
    let API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
    fetch(API).then(res => res.json()).then(bots => {
      console.log(bots)
      this.setState({
        botList: bots
      })
    })
  }

}

export default BotsPage;
