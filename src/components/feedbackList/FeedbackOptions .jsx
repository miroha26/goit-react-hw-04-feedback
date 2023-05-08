import React from 'react';
import {
  OptionsList,
  OptionItem,
  OptionButton,
} from './FeedBackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ btns, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {btns.map(btn => (
        <OptionItem key={btn}>
          <OptionButton name={btn} onClick={onLeaveFeedback}>
            {btn}
          </OptionButton>
        </OptionItem>
      ))}
    </OptionsList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  btns: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
