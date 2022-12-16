import React from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

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

  render() {
    const { good, neutral, bad } = this.state;
    const totalCount = good + neutral + bad;
    const pcositivePercentageCount = Math.round((good * 100) / totalCount);

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onButtonClik}
          />
        </Section>

        <Section title={'Statistics'}>
          {totalCount > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalCount}
              positivePercentage={pcositivePercentageCount}
            />
          ) : (
            <Notification message={'There is no feedback'}></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default Counter;
