import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="stats">
      <div className="stats_block">
        <div
          style={{
            border: '1px solid gray',
            borderRadius: 16,
          }}
        >
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
        </div>
        <p
          style={{
            fontSize: 22,
          }}
        >
          total {total}
        </p>
        <p
          style={{
            color: `rgb(${
              100 - positivePercentage
            }%, ${positivePercentage}%, 0%)`,
            fontWeight: 600,
          }}
        >
          Positive feedback {positivePercentage}%
        </p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
