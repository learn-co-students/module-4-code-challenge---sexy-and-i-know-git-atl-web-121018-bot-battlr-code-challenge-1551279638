import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {

    showMyDamnBotsDammit = (props) => {
        return bots.map(bots => {
            return <BotCard bot={bot} />
        })
    }

    render(){
        console.log("Where the fuck are my bots?", this.state)
        console.log("Where the fuck are my bots?", this.bot)
        return (
            <div className="ui four column grid">
                <div className="row">
                    {this.showMyDamnBotsDammit()}
                </div>
            </div>
        );
    }

};

export default BotCollection;
