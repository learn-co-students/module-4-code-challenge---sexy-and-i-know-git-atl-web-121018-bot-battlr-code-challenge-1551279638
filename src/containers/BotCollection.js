import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
      const mapBots = this.props.bots.map(bot =>
                <BotCard
                    key={bot.id}
                    bot={bot}
                    clickBot={this.props.clickBot}/>
                )

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
                {mapBots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
