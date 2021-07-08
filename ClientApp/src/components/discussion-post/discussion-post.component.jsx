import React from 'react'
import PostHeader from '../post-header/post-header.component'
import PostingAs from '../posting-as/posting-as.component'
import FormTextArea from '../form-text-area/form-text-area.component'
import CustomButton from '../custom-button/custom-button.component'

import './discussion-post.styles.scss'


const DiscussionPost = props => {
  if (!props.type) {
    return null;
  }
  const handleFeebackType = type => {
    if(type === 'feedback') {
      return 'feedback request'
    } 
    return type
  }
  
  return (
  <div className={`discussion-post ${props.postWidth}`}>
    <PostingAs className='posting-as' user={props.user} type={handleFeebackType(props.type)} />
    <FormTextArea className='enter-text' placeholder='Enter text here...'/>
    <CustomButton className='post-button' showbtn={props.showbtn}>Post</CustomButton>
  </div>

  )};

export default DiscussionPost;