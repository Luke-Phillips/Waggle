import React, { useState } from 'react'; 
import ButtonSelector from '../button-selector/button-selector.component';
import './sort-posts.styles.scss';

const SortPosts = ({setSortByValue, showbtn}) => {

  const orderByOldest = () => {
    setSortByValue('oldest')
  }

  const orderByNewest = () => {
    setSortByValue('newest')
  }
  
  const orderByMost = () => {
    setSortByValue('most')
  }

  const orderByLeast = () => {
    setSortByValue('least')
  }

  const setSortBy = [ orderByOldest, orderByNewest, orderByMost, orderByLeast ]
  return (
    <div className='sort-posts'>
      <ButtonSelector
        className='selector'
        clickFuncs={setSortBy}
        labels={['Oldest', 'Newest', 'Most Replies', 'Least Replies']}
        showbtn={showbtn}
      />
    </div>
)};
export default SortPosts;
