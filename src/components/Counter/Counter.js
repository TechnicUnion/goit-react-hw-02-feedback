import React from 'react';
import css from './Counter.module.css';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClik = event => {
    const target = event.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [target]: prevState[target] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div>
        <h2 className={css.title}>Please leave feedback</h2>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.onButtonClik}
        />

        <h2 className={css.title}>Statistics</h2>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Counter;
