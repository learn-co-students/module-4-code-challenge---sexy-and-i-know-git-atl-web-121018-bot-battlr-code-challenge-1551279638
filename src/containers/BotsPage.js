import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {

    state = {
        bots: []
    }

    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(res => {
            this.setState({
                bots: res
            })
        })
    }

    botProps = () => {
        return this.state
    }

    render() {
        console.log("These are my bots", this.state)
        return (
            <div>
                <YourBotArmy />
                <BotCollection bots={this.botProps()} />
            </div>
        );
    }
}

export default BotsPage;
