import React from 'react';
import ButtonSelector from '../button-selector/button-selector.component';
import './create-post.styles.scss';

const CreatePost = props => {

  const labels = ['Announcement', 'Question', 'Insight', 'Feedback Request'];
  
  return (
    <div className='create-post'>
      <h3>Create Post:</h3>
      <ButtonSelector
        labels={labels}
        clickFuncs={props.postTypes}
        showbtn={props.showbtn}
        handleShowNewPost={props.handleShowNewPost}
        isMod={props.isMod}
      />
    </div>
  );
};

export default CreatePost;
