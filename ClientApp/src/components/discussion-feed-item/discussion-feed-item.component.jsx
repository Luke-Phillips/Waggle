import React from 'react';
import PostHeader from '../post-header/post-header.component';
import CustomButton from '../custom-button/custom-button.component';

import './discussion-feed-item.style.scss';



const postTime = new Date('2021/5/17 16:24:00');
// Maybe should use children for content
const DiscussionFeedItem = ({ children, ...otherProps }) => (
  <div className='discussion-feed-item' onClick={otherProps.onClick}>
    <PostHeader user='Cade' date={postTime} />
    <p className='content'>{children}</p>
    <div className='footer' >
      <input className='upload' type='file' />
      <CustomButton className='feed-item-btn'>
        {otherProps.btnName}
      </CustomButton>
    </div>
  </div>
);

export default DiscussionFeedItem;
