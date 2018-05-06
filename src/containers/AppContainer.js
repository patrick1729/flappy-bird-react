import React from "react";
import App from "../components/App";

import $ from "jquery";

class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isGameOver: false,      // isGameOver is set to 'true' when the user either touches the pillar, roof or ground
            score: 0,               // Score of user
            isGameStarted: false    // Indicator to start the game when spacebar is pressed
        };

        // In JavaScript, class methods are not bound by default.
        // If you forget to bind this.handleGameOver, this.handleScore and pass it to onClick, this will be undefined when the function
        // is actually called.
        this.handleGameOver = this.handleGameOver.bind(this);
        this.handleScore = this.handleScore.bind(this);
    }

    componentDidMount() {
        $("body").keypress((e) => {
            if (e.keyCode === 32) {
                this.setState({
                    isGameStarted: true
                });
            }
        });
    }

    handleGameOver(isGameOver) {
        this.setState({
            isGameOver
        });
    }

    handleScore(score) {
        this.setState({
            score
        }, function () {
            console.log(score);
        });
    }

    render() {
        let isGameOver = this.state.isGameOver;
        let score = this.state.score;   
        let isGameStarted = this.state.isGameStarted;     
        return <App
            isGameOver={isGameOver}
            isGameStarted={isGameStarted}
            score={score}
            handleGameOver={this.handleGameOver}
            handleScore={this.handleScore} />;
    }
}

export default AppContainer;