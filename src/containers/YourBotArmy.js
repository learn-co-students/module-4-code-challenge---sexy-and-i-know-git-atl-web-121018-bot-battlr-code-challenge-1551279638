import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  render(){
      // console.log(this.props.armyBots)
      const mapBots = this.props.armyBots.map(bot =>
            <BotCard
                key={bot.id}
                bot={bot}
                clickBot={this.props.clickBot}/>
            )

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
              {mapBots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
