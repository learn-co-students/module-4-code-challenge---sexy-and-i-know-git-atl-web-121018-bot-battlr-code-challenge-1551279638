import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  makeCards = (bots) => {
    return bots.map(bot => {
      return <BotCard bot={bot} enlist={this.props.enlist} displaySpecs={this.props.displaySpecs}/>
    })
  }


  render(){

    let botCards = this.makeCards(this.props.botList)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botCards}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
