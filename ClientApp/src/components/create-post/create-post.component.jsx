import React from 'react'
import ButtonSelector from '../button-selector/button-selector.component'
import './create-post.styles.scss'

const CreatePost = () => (
  <div className='create-post'>
    <h3>Create Post:</h3>
    <ButtonSelector labels={['Announcement', 'Question', 'Insight', 'Comment', 'Feedback Request']} />
  </div>
);

export default CreatePost;