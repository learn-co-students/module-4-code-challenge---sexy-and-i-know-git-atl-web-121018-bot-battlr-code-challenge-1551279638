import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  showBots = () => {
    return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} enlistBot={this.props.enlistBot} />)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.showBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
