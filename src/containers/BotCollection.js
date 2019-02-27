import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  showBots = () => {
    return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} toggleEnlist={this.props.toggleEnlist} />)
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
