import React, {Component} from 'react';

export default class PoemContainer extends Component {

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  //this is getting a random int 1-6 because of the way the words are indexed; all are between 111111-666666 so that you can pick with die rolls
  makeRandomNumber = () => {
    let rando_number = '';
    for(let i = 0; i < 6; i++) {
      let newNum = this.getRandomInt(1,7);
      rando_number += newNum;
    }
    return rando_number;
  }

  state = {
    num: '77',
  }

  assignRando = () => {
    console.log(this.state.num)
    this.setState({
      num: this.makeRandomNumber(),
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.assignRando}>Rando</button>
        <h1>{this.state.num}</h1>
      </div>
      );
}
}
