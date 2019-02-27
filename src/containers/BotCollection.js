import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			renderMe: true,
			showMe: null
		}
	} 

	showAll = () => {
		this.setState({
			renderMe: true
		})
	}

	showBot = (bot) => {
		this.setState({
			renderMe: false,
			showMe: <BotSpecs bot={bot} handleBot={this.props.handleBot} showAll={this.showAll}/>
		})
	} 

  render() {
		const botList = this.props.bots.map(bot =>(<BotCard bot={bot} showBot={this.showBot}/>))
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				Collection of all bots
    		  {this.state.renderMe === true ? botList : this.state.showMe}
    		</div>
  	  </div>
  	);
  }
};

export default BotCollection;