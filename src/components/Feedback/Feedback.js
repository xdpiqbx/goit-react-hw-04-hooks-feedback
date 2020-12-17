import PropTypes from 'prop-types';

import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Feedback">
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
    </Section>
  );
};

export default Feedback;

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
