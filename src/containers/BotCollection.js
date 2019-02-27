import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render() {
		const botList = this.props.bots.map(bot =>(<BotCard bot={bot} handleBot={this.props.handleBot}/>))
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				Collection of all bots
    		{botList}
    		</div>
  	  </div>
  	);
  }x
};

export default BotCollection;