import React, { Component } from "react";
import Card from './components/Card'

import data from "./data.js";


class App extends Component {
    state = {
        data,
        clicked: [],
        score: 0,
        highscore: 0
    };

    randomizer = () => {
        this.state.data.sort((a, b) => { return 0.5 - Math.random() });
    };

    setHighScore = () => {
        if (this.state.score > this.state.highscore) {
            this.setState({
                highscore: this.state.score
            });
        }
    };

    restart = () => {
        this.setHighScore();
        this.setState({
            clicked: [],
            score: 0
        })
    };

    imageClick = event => {
        // console.log("clicked")
        const currentChar = event.target.id;
        const isClicked = this.state.clicked.indexOf(currentChar) > -1;

        if (isClicked) {
            this.randomizer();
            this.restart();
        } else {
            this.randomizer();
            this.setState({
                clicked: this.state.clicked.concat(currentChar),
                score: this.state.score + 1
            },
                () => {
                    if (this.state.score === 12) {
                        this.randomizer();
                        this.restart();
                    }
                });
        }
    };

    render() {
        return (
            <div>
                <div className='scores'>
                    <h2>
                        highscore={this.state.highscore}
                        score={this.state.score}
                    </h2>
                </div>
                <div>
                    {this.state.data.map(cards => (
                        <Card
                            imageClick={this.imageClick}
                            id={cards.id}
                            key={cards.id}
                            name={cards.name}
                            image={cards.image}
                        />
                    ))}
                </div>
            </div>
        );
    }
}





export default App;