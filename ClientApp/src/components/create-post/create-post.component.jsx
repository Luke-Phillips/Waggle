import React from 'react';
import ButtonSelector from '../button-selector/button-selector.component';
import DiscussionPost from '../discussion-post/discussion-post.component';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import './create-post.styles.scss';

const CreatePost = () => {
  const announcement = () => {
    // alert('announcment');
    return (
      console.log('Announcement clicked'),
      <DiscussionPost user='Cade' type='announcment' />
    );
  };

  const question = () => {
    alert('question');
  };

  const insight = () => {
    alert('insight');
  };

  const feedback = () => {
    alert('feedback');
  };

  const labels = ['Announcement', 'Question', 'Insight', 'Feedback Request'];
  const postTypes = [announcement, question, insight, feedback];

  console.log('Create Post Comp');
  return (
    <div className='create-post'>
      <h3>Create Post:</h3>
      <ButtonSelector
        logName='--------- Create Post -----------'
        labels={labels}
        postTypes={postTypes}
      />
    </div>
  );
};

export default CreatePost;
