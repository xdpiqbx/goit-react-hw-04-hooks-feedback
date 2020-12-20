import { useState } from 'react';

import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

import s from './App.module.css';

function App () {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function increment(type){
    switch(type){
      case "good":
        setGood(prevGood => prevGood + 1)
        return
      case "neutral":
        setNeutral(prevNeutral => prevNeutral + 1)
        return
      case "bad":
        setBad(prevBad => prevBad + 1)
        return
      default:
        return
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.floor((good * 100) / countTotalFeedback());
  }

  return (
    <div className={s.App}>
      <Feedback
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={increment}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        percent={countPositiveFeedbackPercentage()}
      />
    </div>
  );
}

export default App;