import React from 'react';
import { ReactComponent as CommentIcon } from '../../assets/comment-2.svg';
// import { ReactComponent as QuestionIcon } from '../../assets/question-mark.svg';
import { ReactComponent as AnswerIcon } from '../../assets/answer.svg';
import { ReactComponent as FbRequestIcon } from '../../assets/fb-request.svg';
import { ReactComponent as FbResponseIcon } from '../../assets/fb-response.svg';

import './post-header.styles.scss';

const PostHeader = props => {
  
  const datePosted = new Date(props.date)

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

  const upperCaseFirstLetter = word => {
    return word === undefined ? '' : word[0].toUpperCase() + word.slice(1);
  }

  const handleHeaderPostType = postType => {
    const header = postType === 'feedback' ? 'Feedback Request' : postType;
    return upperCaseFirstLetter(header)
  }
  
  const handleNullUser = authorId => {
    return authorId === null ? 'No User Name O:' : authorId
  }
  
  return(
  <div className='post-header'>

    <div className='header-info'>
      <p>{`${handleHeaderPostType(props.type)} posted by ${handleNullUser(props.user)} ${timeElapsedSincePosted(
        datePosted
      )} ago`}</p>
      <p>{`${datePosted.toLocaleString(navigator.language, {
        dateStyle: 'full',
        timeStyle: 'short',
      })}`}</p> 
    </div>
    <div id={`${props.type.toLowerCase()}`} className='icon-container post-identifier'>
      {/* <CommentIcon className='icon'/> */}
      {/* <FbRequestIcon /> */}
    </div>
  </div>
)};

export default PostHeader;
