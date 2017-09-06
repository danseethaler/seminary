import React, { Component } from 'react';

export default class Random extends Component {
  state = {
    student: 'Welcome'
  };
  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  pick() {
    if (!this.current.length) {
      this.current = this.shuffle(this.roster.slice());
    }
    this.setState({ student: this.current.shift() });
  }
  current = [];
  roster = [
    'Leana',
    'Cooper',
    'Mallory',
    'Lauren',
    'Kimberly',
    'Dylan',
    'Emily',
    'Alyssa',
    'Rachel',
    'Grant',
    'Eliza',
    'Julia',
    'Madison'
  ];
  render() {
    return (
      <div
        onClick={e => this.pick()}
        style={{
          textAlign: 'center',
          marginTop: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '100vh',
          backgroundColor: '#2d414e'
        }}
      >
        <h1
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '4em',
            marginBottom: '1em',
            height: 87,
            color: 'white'
          }}
        >
          {this.state.student}
        </h1>
      </div>
    );
  }
}
