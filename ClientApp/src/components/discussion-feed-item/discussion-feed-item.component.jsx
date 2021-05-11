import React from 'react';
import PostHeader from '../post-header/post-header.component';
import CustomButton from '../custom-button/custom-button.component';

import './discussion-feed-item.style.scss';

const postTime = new Date().getTime();
// Maybe should use children for content
const DiscussionFeedItem = ({ children, ...otherProps }) => (
  <div className='discussion-feed-item'>
    <PostHeader user='Cade' date={postTime} />
    <p className='content'>{children}</p>
    <div className='footer'>
      <input className='upload' type='file' />
      <CustomButton className='feed-item-btn'>
        {otherProps.btnName}
      </CustomButton>
    </div>
  </div>
);

export default DiscussionFeedItem;
