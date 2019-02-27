import React from "react";
import BotCollection from './BotCollection'
import BotArmy from './YourBotArmy'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
class BotsPage extends React.Component {

    constructor() {
        super()

        this.state = {
            bots: [],
            armyBots: []
        }
    }

    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(data => {
            const allBots = data.map(bot => ({
                ...bot, selected: false
            }))

            this.setState({
                bots: allBots
            })
        })
    }

    clickBot = (clickedBot) => {
        // console.log(clickedBot)

        // returns all bots with clickedBot's 'selected' key set to true
        const newBotData = this.state.bots.map(bot => {
            if (bot.id === clickedBot.id) {
                return {...bot, selected: !bot.selected}
            } else {
                return bot
            }
        })

        // filters through newBotData & returns those that have been selected
        const selectedBots = newBotData.filter(bot => bot.selected === true)
        // console.log(selectedBots)

        this.setState({
            bots: newBotData,
            armyBots: selectedBots
        })
    }

    render() {
        return (
            <div>
                <BotArmy
                    armyBots={this.state.armyBots}
                    clickBot={this.clickBot}/>
                <BotCollection
                    bots={this.state.bots}
                    clickBot={this.clickBot}/>
            </div>
        );
    }

}

export default BotsPage;
