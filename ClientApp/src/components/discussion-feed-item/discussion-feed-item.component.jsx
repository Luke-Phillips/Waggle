import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FileUpload from '../file-upload/file-upload.component';
import PostHeader from '../post-header/post-header.component';
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

const DiscussionFeedItem = ({ btnFunc = () => {} , children, ...props }) => {

  const buttonLabeler = (postType, isResponse = false) => {
    if(postType === 'question') {
      return 'Answer'
    }
    if(postType === 'feedback') {
      return 'Respond'
    }
    if(postType === 'feedback' && isResponse) {
      return 'Response'
    }

    return 'Comment'
  }
  
  const replyBtnClickHandler = () => {
    btnFunc(buttonLabeler(props.type, true))
    props.replyClick()
  
  }

  return (
  <div
    id={props.postType} // This needs to change!!! 
    className={`discussion-feed-item ${props.postWidth}`}
    
  >
    <div onClick={props.onClick}>
    <PostHeader user={props.user} date={postTime} />
    <p className='content'>{children}</p>
    </div>

    <div className='footer'>
      <Ratings postType={props.type}/>
      <FileUpload allowUpload={props.type}/>
      <div className='btnContainer'>
        
        <CustomButton className='feed-item-btn' showbtn={props.showbtn} onClick={replyBtnClickHandler}>
          {buttonLabeler(props.type)}
        </CustomButton>
      </div>
    </div>
  </div>
)};

export default DiscussionFeedItem;
