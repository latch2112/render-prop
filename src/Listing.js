import React, { Component } from "react";


import "./index.css";

const Child = ({ id, isClicked }) => (
    <div
        className={isClicked ? `highlight` : ``}
    >{`ID ${id} --- I am a child element`}</div>
);

class Listing extends Component {
    state = {
        // clicked: [] //works too
        clicked: {}
    };

    handleClick = i => {
        this.setState(prevState => {
            // const clicked = [...prevState.clicked]; // <- if clicked is declared as an array
            const clicked = { ...prevState.clicked };
            console.log(`prevState.clicked, clicked`, prevState.clicked, clicked);
            clicked[i] = !clicked[i];
            return { clicked };
        });
    };

    render() {
        const items = [1, 2, 3, 4, 5].map((id, i) => {
            return (
                <div key={id} onClick={() => this.handleClick(i)}>
                    <Child id={id} isClicked={this.state.clicked[i]} />
                </div>
            );
        });

        return (
            <div>
                <div>{items}</div>
            </div>
        );
    }
}

export default Listing;