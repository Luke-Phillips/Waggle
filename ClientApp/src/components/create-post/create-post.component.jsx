import React from 'react';
import ButtonSelector from '../button-selector/button-selector.component';
import './create-post.styles.scss';

const CreatePost = () => {
  function one() {
    alert('one');
  }

  function two() {
    alert('two');
  }

  function three() {
    alert('three');
  }

  function four() {
    alert('four');
  }

  function five() {
    alert('five');
  }

  // const funcArray = [one, two, three, four, five];

  const lables = ['Announcement', 'Question', 'Insight', 'Feedback Request'];
  return (
    <div className='create-post'>
      <h3>Create Post:</h3>
      <ButtonSelector functions={[one, two, three, four]} labels={lables} />
    </div>
  );
};

export default CreatePost;
