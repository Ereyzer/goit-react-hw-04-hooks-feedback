import React, { useRef, useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import {
  totalCount,
  percentageCount,
} from '../../hooks/totalCountAndPercentage';

export function App() {
  let openStatistic = useRef(false);
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const changeState = option => {
    openStatistic.current = true;
    setState(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          leaveFeedback={changeState}
        />
      </Section>
      <Section title="Statistics">
        {openStatistic.current ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalCount(state)}
            positivePercentage={percentageCount(state)}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
