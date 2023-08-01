import React, { useState } from 'react';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackClick = (evt) => {
    const type = evt.target.textContent.toLowerCase();

    switch (type) {
      case "good":
        setGood((s) => s + 1)
        break;
      case "neutral":
        setNeutral((s) => s + 1)
        break;
      case "bad":
        setBad((s) => s + 1)
        break;

      default:
        break;
    }
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round((good / (good + neutral + bad)) * 100) + '%';
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const options = ['Good', 'Neutral', 'Bad'];
  const isFeedbackExists = good || neutral || bad;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} handleFeedbackClick={handleFeedbackClick} />
      </Section>

      {isFeedbackExists ? (
        <Section title="Statistics">
          <Statistics
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default App;
