import React from 'react';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodButtonClik = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onNeutralButtonClik = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  onBadButtonClik = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <button onClick={this.onGoodButtonClik}>Good</button>
          <button onClick={this.onNeutralButtonClik}>Neutral</button>
          <button onClick={this.onBadButtonClik}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
        </div>
      </div>
    );
  }
}

export default Counter;
