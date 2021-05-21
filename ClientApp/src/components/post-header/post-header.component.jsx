import React from 'react';

import './post-header.styles.scss';

function equalToOne(timeMetric) {
  return timeMetric === 1 ? true : false;
}

function timeElapsedSincePosted(timePosted) {
  let currentDate = new Date();
  let timeElapsed = '';
  let diffInMilliSeconds =
    Math.abs(currentDate.getTime() - timePosted.getTime()) / 1000;
  let days = Math.floor(diffInMilliSeconds / 86400);
  let hours = Math.floor(diffInMilliSeconds / 3600);
  let minutes = Math.floor(diffInMilliSeconds / 60);

  if (days > 0) {
    equalToOne(days)
      ? (timeElapsed = `${days} day`)
      : (timeElapsed = `${days} days`);
    return timeElapsed;
  }

  if (hours > 0 && hours < 24) {
    equalToOne(hours)
      ? (timeElapsed = `${hours} hour`)
      : (timeElapsed = `${hours} hours`);
    return timeElapsed;
  }

  if (minutes > 0 && minutes < 60) {
    equalToOne(minutes)
      ? (timeElapsed = `${minutes} minute`)
      : (timeElapsed = `${minutes} minutes`);
    return timeElapsed;
  }

  return 'less than a minute';
}

const PostHeader = props => (
  <div className='post-header'>
    <p>{`Posted by ${props.user} ${timeElapsedSincePosted(props.date)} ago`}</p>
    <p>{`${props.date.toLocaleString(navigator.language, {
      dateStyle: 'full',
      timeStyle: 'short',
    })}`}</p>
  </div>
);

export default PostHeader;
