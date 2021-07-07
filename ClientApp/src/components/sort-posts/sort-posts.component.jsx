import React, { useState } from 'react';
import UseState from 'react'; 
import ButtonSelector from '../button-selector/button-selector.component';
import './sort-posts.styles.scss';

const SortPosts = props => {
  
  const [whenPostedToggle, setWhenPostedToggle] = useState(1); // 1 = most recent
  const [numResponsesToggle, setNumResponsesToggle] = useState(1); // 1 = most replies

  const whenPostedClickHandler = e => {
    setWhenPostedToggle(() => -+whenPostedToggle)
  }

  const numResponsesClickHandler = e => {
    setNumResponsesToggle(() => -+numResponsesToggle)
  }

  const whenPostedCompare = isAscending => {
    return (post1, post2) => {
      if (post1.time > post2.time) return isAscending;
      if (post1.name < post2.name) return -+isAscending;
      return 0;
    };
  }

  const numResponsesCompare = isAscending => {
    return (post1, post2) => {
      if(post1.replies.length > post2.replies.length) return isAscending;
      if(post1.replies.length < post2.replies.length) return -+isAscending;
    }
  }
  
  return (
    <div className='sort-posts'>
      <ButtonSelector
        className='selector'
        labels={['Oldest', 'Newest', 'Most Replies', 'Least Replies']}
      />
    </div>
)};
export default SortPosts;
