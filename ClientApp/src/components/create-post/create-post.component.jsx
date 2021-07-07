import React from 'react';
import ButtonSelector from '../button-selector/button-selector.component';
import DiscussionPost from '../discussion-post/discussion-post.component';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import './create-post.styles.scss';

const CreatePost = props => {

  const labels = ['Announcement', 'Question', 'Insight', 'Feedback Request'];
  

  console.log('Create Post Comp');
  return (
    <div className='create-post'>
      <h3>Create Post:</h3>
      <ButtonSelector
        labels={labels}
        postTypes={props.postTypes}
      />
    </div>
  );
};

export default CreatePost;
