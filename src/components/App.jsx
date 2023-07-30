import React, { Component } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

const options = ['good', 'neutral', 'bad'];

const getTotal = state => {
  return state.good + state.neutral + state.bad;
};

const countPositiveFeedbackPercentage = state => {
  const { good } = state;
  const total = getTotal(state);
  return Math.round((good / total) * 100);
};

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackIncrement = type => {
    this.setState(({ [type]: prevStateValue }) => ({
      [type]: prevStateValue + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = getTotal(this.state);
    const positivePercentage = countPositiveFeedbackPercentage(this.state);

    const StatisticsComponent = () => {
      return total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      );
    };

    return (
      <main style={{ width: 300, margin: '0 auto', textAlign: 'center' }}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedbackIncrement}
          />
        </Section>

        <Section title="Statistics">
          <StatisticsComponent />
        </Section>
      </main>
    );
  }
}

export default App;
