import React from 'react';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button className={css.button} onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={css.button} onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={css.button} onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
}
