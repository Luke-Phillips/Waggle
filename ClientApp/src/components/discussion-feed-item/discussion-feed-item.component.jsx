import React from 'react';
import PostHeader from '../post-header/post-header.component';
import CustomButton from '../custom-button/custom-button.component';
import Ratings from '../ratings/ratings.component';

import './discussion-feed-item.style.scss';

const postTime = new Date('2021/5/17 16:24:00');
// Maybe should use children for content

//TODO: create function to take a post type and output a button label
// question --> answer
// answer --> comment
// comment --> comment
// insight --> comment
// feedbackReq --> response?? (essentially a comment)

const buttonLabeler = postType => {
  if(postType === 'question') {
    return 'Answer'
  }
  if(postType === 'feedback') {
    return 'Respond'
  }
  return 'Comment'
}

const DiscussionFeedItem = ({ children, ...otherProps }) => (
  <div
    id={otherProps.postType}
    className={`discussion-feed-item ${otherProps.postWidth}`}
    
  >
    <div onClick={otherProps.onClick}>
    <PostHeader user={otherProps.user} date={postTime} />
    <p className='content'>{children}</p>
    </div>

    <div className='footer'>
      <Ratings postType={otherProps.type}/>
      <div className='btnContainer'>
        <input className='upload' type='file' />
        <CustomButton className='feed-item-btn'>
          {buttonLabeler(otherProps.type)}
        </CustomButton>
      </div>
    </div>
  </div>
);

export default DiscussionFeedItem;
