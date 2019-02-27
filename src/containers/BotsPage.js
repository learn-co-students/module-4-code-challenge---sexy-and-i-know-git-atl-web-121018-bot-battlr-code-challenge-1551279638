import React from "react";
import BotCollection from './BotCollection'
import BotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
class BotsPage extends React.Component {

    constructor() {
        super()

        this.state = {
            bots: [],
            armyBots: [],
            selectedBot: null
        }
    }

    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(data => {
            // adding selected: false key/val pair to each bot
            const allBots = data.map(bot => ({
                ...bot, selected: false
            }))

            this.setState({
                bots: allBots
            })
        })
    }

    clickBot = (clickedBot) => {
        this.setState({
            selectedBot: clickedBot
        })

    }

    handleEnlistBtn = (clickedBot) => {
        // console.log(clickedBot)
        // returns all bots with clickedBot's 'selected' key set to true
        const newBotData = this.state.bots.map(bot => {
            if (bot.id === clickedBot.id) {
                return {...bot, selected: true}
            } else {
                return bot
            }

            console.log(newBotData)
        // filters through newBotData & returns those that have been selected
            const selectedBots = newBotData.filter(bot => bot.selected === true)

            this.setState({
                bots: newBotData,
                armyBots: selectedBots,
                selectedBot: clickedBot
            })
        })
    }

    handleBackBtn = () => {
        this.setState({
            selectedBot: null
        })
    }


    render() {
        return (
            <div>
                <BotArmy
                    armyBots={this.state.armyBots}
                    clickBot={this.clickBot}/>
                {
                    this.state.selectedBot === null ?
                        <BotCollection
                            bots={this.state.bots}
                            clickBot={this.clickBot}/> :
                        <BotSpecs
                            bot={this.state.selectedBot}
                            handleBackBtn={this.handleBackBtn}
                            handleEnlistBtn={this.handleEnlistBtn}/>
                }
            </div>
        );
    }

}

export default BotsPage;
