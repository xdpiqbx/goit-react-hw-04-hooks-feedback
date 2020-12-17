import PropTypes from 'prop-types';

import Section from '../Section';
import StatisticsItem from '../StatisticsItem';
import Notification from '../Notification';

const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <Section title="Statistics">
      {total ? (
        <ul>
          <StatisticsItem name="Good" value={good} />
          <StatisticsItem name="Neutral" value={neutral} />
          <StatisticsItem name="Bad" value={bad} />
          <StatisticsItem name="Total" value={total} />
          <StatisticsItem
            name="Positive feedback"
            value={percent}
            isPercent={true}
          />
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </Section>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percent: PropTypes.number,
};
