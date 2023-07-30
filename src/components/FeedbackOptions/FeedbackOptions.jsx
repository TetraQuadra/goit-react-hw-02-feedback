import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div style={{ display: 'flex', gap: 25, justifyContent: 'center' }}>
      {options.map(item => (
        <button
          key={item}
          type="button"
          onClick={() => onLeaveFeedback(item)}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            textTransform: 'uppercase',
            border: 'none',
            padding: 8,
            borderRadius: 5,
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
