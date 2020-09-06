import React, {Component} from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeRandomNumber() {
  let rando_number = '';
  for(let i = 0; i < 6; i++) {
    let newNum = getRandomInt(1,7);
    rando_number += newNum;
  }
  return rando_number;
}

export default class PoemContainer extends Component {
  render() {
    let num = makeRandomNumber();
    console.log(num)

    return (
      <div />
    );
  }
}
