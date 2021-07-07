import React, { useState } from 'react'; 
import ButtonSelector from '../button-selector/button-selector.component';
import './sort-posts.styles.scss';

const SortPosts = props => {

  const orderByOldest = () => {
    props.setSortByValue('oldest')
  }

  const orderByNewest = () => {
    props.setSortByValue('newest')
  }
  
  const orderByMost = () => {

    props.setSortByValue('most')
  }

  const orderByLeast = () => {
    props.setSortByValue('least')
  }

  const setSortBy = [ orderByOldest, orderByNewest, orderByMost, orderByLeast ]
  return (
    <div className='sort-posts'>
      <ButtonSelector
        className='selector'
        clickFuncs={setSortBy}
        labels={['Oldest', 'Newest', 'Most Replies', 'Least Replies']}
      />
    </div>
)};
export default SortPosts;
