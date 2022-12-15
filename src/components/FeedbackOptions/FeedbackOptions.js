import React from 'react';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.buttonList}>
      {options.map(item => (
        <button className={css.button} key={item} onClick={onLeaveFeedback}>
          {`${item.charAt(0).toUpperCase()}${item.slice(1)}`}
        </button>
      ))}
    </div>
  );
}
