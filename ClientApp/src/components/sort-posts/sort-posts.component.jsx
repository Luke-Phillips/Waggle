import React from 'react';
import ButtonSelector from '../button-selector/button-selector.component';
import './sort-posts.styles.scss';

const SortPosts = props => (
  <div className='sort-posts'>
    <ButtonSelector
      className='selector'
      logName='--------- Sort Posts -----------'
      labels={['Oldest', 'Newest', 'Most Replies', 'Least Replies']}
    />
  </div>
);
// Need On click
export default SortPosts;
