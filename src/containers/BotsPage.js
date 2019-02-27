import React from "react";
import BotCollection from 'react';
import YourBotArmy from 'react';

class BotsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      botColl: this.props.bots,
      botArmy: []
    }
  }

  handleClick = (bot) => {
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    })
  }




  render() {
    console.log(this.props)
    return (
      <div>
        {<BotCollection botColl={this.state.botColl} handleClick={this.handleClick}/>}
        {<YourBotArmy botArmy={this.state.botArmy} />}
      </div>
    );
  }

}

export default BotsPage;
