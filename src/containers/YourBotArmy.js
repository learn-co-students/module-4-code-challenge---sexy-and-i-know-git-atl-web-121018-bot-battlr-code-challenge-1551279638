import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '..components/BotSpecs'

class YourBotArmy extends React.Component {

  botArmy = () => this.props.botArmy.map(bot => {
    return <BotCard key={bot.id} bot={bot} />
  })

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.botArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
