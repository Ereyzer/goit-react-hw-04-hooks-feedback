import React from 'react';
import { Statistic } from '../Statistic/Statistic';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <Statistic key="good" text="good" item={good} />
      <Statistic key="neutral" text="neutral" item={neutral} />
      <Statistic key="bad" text="bad" item={bad} />
      <Statistic key="total" text="total" item={total} />
      <Statistic
        key="positivePercentage"
        text="positivePercentage"
        item={positivePercentage}
      />
    </ul>
  );
}

//
