import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FileUpload from '../file-upload/file-upload.component';
import PostHeader from '../post-header/post-header.component';
import Ratings from '../ratings/ratings.component';

import './discussion-feed-item.style.scss';

//TODO: create function to take a post type and output a button label
// question --> answer
// answer --> comment
// comment --> comment
// insight --> comment
// feedbackReq --> response?? (essentially a comment)

const DiscussionFeedItem = ({ btnFunc = () => {}, children, ...props }) => {
  

  const buttonLabeler = postType => {
    if (postType === 'question') {
      return 'Answer';
    }
    if (postType === 'feedback') {
      return 'Respond';
    }
    return 'Comment';
  };

  const replyHeaderLabeler = postType => {
    if (postType === 'question') {
      return 'Answer';
    }
    if (postType === 'feedback') {
      return 'Response';
    }

    return 'Comment';
  };

  const replyBtnClickHandler = () => {
    btnFunc(replyHeaderLabeler(props.type));
    props.replyClick();
  };

  return (
    <div
      key={props.postType} // This needs to change!!!
      className={`discussion-feed-item ${props.postWidth} ${props.type}`}
    >
      <div onClick={props.onClick}>
        <PostHeader className={`${props.type}`} type={props.type} user={props.user} date={props.time} />
        <p className='content'>{children}</p>
      </div>

      <div className='footer'>
        <Ratings postType={props.type} />
        <FileUpload allowUpload={props.type} />
        <div className='btnContainer'>
          <CustomButton
            className='feed-item-btn'
            showbtn={props.showbtn}
            onClick={replyBtnClickHandler}
          >
            {buttonLabeler(props.type)}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default DiscussionFeedItem;
