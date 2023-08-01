import { Wrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({handleFeedbackClick, options}) {
    return (
      <Wrapper>
        {options.map(option => {
          return (
            <button key={option} onClick={handleFeedbackClick}>
              {option}
            </button>
          );
        })}
      </Wrapper>
    );
}

FeedbackOptions.propTypes = {
  handleFeedbackClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};