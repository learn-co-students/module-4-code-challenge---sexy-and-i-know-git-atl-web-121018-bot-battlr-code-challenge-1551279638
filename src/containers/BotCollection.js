import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
  state = {
    specs: null
  }

  toggleSpecs = (bot) => {
    let newSpecs

    if (this.state.specs) {
      newSpecs = null
    } else {
      newSpecs = bot
    }

    this.setState({specs: newSpecs})
  }

  showBots = () => {
    if (this.state.specs) {
      return <BotSpecs bot={this.state.specs} />
    } else {
      return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={this.toggleSpecs} />)

    }
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.showBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
