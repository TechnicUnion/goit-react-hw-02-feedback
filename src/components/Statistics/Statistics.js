import React from 'react';
import css from './Statistics.module.css';

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <ul className={css.ststisticsList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedbac: {positivePercentage}%</li>
    </ul>
  );
}