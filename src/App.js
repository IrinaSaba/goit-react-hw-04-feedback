import React, { Component } from "react";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Section from "./Components/Section/Section.jsx";
import Notification from "./Components/Notification/Notification.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  plus = (key) => {
    // console.log(event);
    this.setState((prevState) => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    // Object.values(this.state).reduce((total, el) => (total += el));
    // console.log(total);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = parseInt(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return positivePercentage;
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.plus} />
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no any feedback" />
        )}
      </Section>
    );
  }
}
export default App;
