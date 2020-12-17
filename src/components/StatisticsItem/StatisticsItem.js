import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

const StatisticsItem = props => {
  const { name, value, isPercent } = props;
  return (
    <li className={s.listItem}>
      <span className={s.itemTitle}>{name}:</span>
      <span className={s.itemValue}>
        {value} {isPercent ? '%' : null}
      </span>
    </li>
  );
};

StatisticsItem.defaultProps = {
  value: 0,
  isPercent: false,
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  isPercent: PropTypes.bool,
};
