import React from 'react'
import PostHeader from '../post-header/post-header.component'
import PostingAs from '../posting-as/posting-as.component'
import FormTextArea from '../form-text-area/form-text-area.component'
import CustomButton from '../custom-button/custom-button.component'

import './discussion-post.styles.scss'

const postDate = new Date().getTime();

const DiscussionPost = () => (
  <div className='discussion-post'>
    <PostingAs className='posting-as' user='Cade' type='Question' />
    <FormTextArea className='enter-text' placeholder='Enter text here...'/>
    <CustomButton className='post-button'>Post</CustomButton>
  </div>

);

export default DiscussionPost;