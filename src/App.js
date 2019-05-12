import React, { Component } from "react";
import CardList from './CardList' //card component
import SearchBox from './SearchBox' //search box component
import {robots} from './robots' // destructring - robot object

class App extends Component {

    constructor() {
        super() //The super keyword is used to access and call functions on an object's parent.
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase)
        })
    }

    //This renders on the page
    render() {
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}></CardList>
            </div>
        )
    }
}

export default App;