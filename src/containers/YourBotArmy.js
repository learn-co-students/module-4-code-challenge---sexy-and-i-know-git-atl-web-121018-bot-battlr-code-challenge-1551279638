import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  makeCards = (bots) => {
    return bots.map(bot => {
      return <BotCard bot={bot} enlist={this.props.enlist}/>
    })
  }


  render(){

    let botCards = this.makeCards(this.props.enlisted)


    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {botCards}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
