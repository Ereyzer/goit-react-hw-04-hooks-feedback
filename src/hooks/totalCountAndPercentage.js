export const totalCount = ({ good, neutral, bad }) => good + neutral + bad;
export const percentageCount = ({ good, neutral, bad }) =>
  Math.round((100 / (good + neutral + bad)) * good);

// //  Math.round((good * 100 + neutral * 50 + bad * 0) / (good + neutral + bad));
