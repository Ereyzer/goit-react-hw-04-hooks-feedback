import React, { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export class App extends Component {
  openStatistic = false;

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  changeState = option => {
    this.openStatistic = true;
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  totalCount = ({ good, neutral, bad }) => good + neutral + bad;

  percentageCount = ({ good, neutral, bad }) =>
    Math.round((100 / (good + neutral + bad)) * good);
  //  Math.round((good * 100 + neutral * 50 + bad * 0) / (good + neutral + bad));

  render() {
    const { state } = this;
    const { good, neutral, bad } = state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            leaveFeedback={this.changeState}
          />
        </Section>
        <Section title="Statistics">
          {this.openStatistic ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalCount(state)}
              positivePercentage={this.percentageCount(state)}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
