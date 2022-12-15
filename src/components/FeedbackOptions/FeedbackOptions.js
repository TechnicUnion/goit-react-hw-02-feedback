import React from 'react';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(item => (
        <button className={css.button} key={item} onClick={onLeaveFeedback}>
          {item}
        </button>
      ))}
    </div>
  );
}
