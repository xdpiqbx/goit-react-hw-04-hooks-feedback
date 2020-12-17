import { Component } from 'react';

import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = type => {
    this.setState({ [type]: this.state[type] + 1 });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.App}>
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.increment}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          percent={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
