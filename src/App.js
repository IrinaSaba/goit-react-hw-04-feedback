import React, { useState, useEffect } from "react";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Section from "./Components/Section/Section.jsx";
import Notification from "./Components/Notification/Notification.jsx";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
    }
  };

  const countTotal = () => {
    let total = good + neutral + bad;
    // console.log(good);
    return total;
  };

  const countpositivePercentage = () => {
    let positivePercentage = parseInt((good * 100) / countTotal());
    return positivePercentage;
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={{ good, neutral, bad }}
        getFeedback={getFeedback}
      />
      {countTotal() !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotal}
          positivePercentage={countpositivePercentage}
        />
      ) : (
        <Notification message="There is no any feedback" />
      )}
    </Section>
  );
}
