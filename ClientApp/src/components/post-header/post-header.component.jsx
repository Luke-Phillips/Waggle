import React from 'react'

import './post-header.styles.scss'

function timeElapsedSincePosted(timePosted) {
  let currentDate =  new Date();
  let timeElapsed = currentDate.getTime() - timePosted;
  return timeElapsed;
};


const PostHeader = props => (
  
  <div className='post-header'>
    <p>{`Posted by ${props.user} ${timeElapsedSincePosted(props.date)} ago`}</p>
    <p>{`${props.date}`}</p>
    
  </div>
);

export default PostHeader;