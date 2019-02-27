import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				Collection of all bots
    		  {this.props.bots.map(bot =>(<BotCard bot={bot} handleBot={this.props.handleBot}/>))}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
