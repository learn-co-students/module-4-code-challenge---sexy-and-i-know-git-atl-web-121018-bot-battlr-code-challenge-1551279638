import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '..components/BotSpecs'

class BotCollection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bots: this.props.botColl
    }
  }

  botsCards = () => this.state.bots.map(bot => {
    return <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>
  })

  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.botsCards()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
