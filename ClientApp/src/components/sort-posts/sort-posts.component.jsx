import React from 'react'
import ButtonSelector from '../button-selector/button-selector.component'
import './sort-posts.styles.scss'

const SortPosts = (props) => (
  <div className='sort-posts'>

    <ButtonSelector labels={['Oldest', 'Newest', 'Most Replies', 'Least Replies']} />

    {/* <CustomButton className='button' type='button'>Oldest</CustomButton>
    <CustomButton className='button' type='button'>Newest</CustomButton>
    <CustomButton className='button' type='button'>Most Replies</CustomButton>
    <CustomButton className='button' type='button'>Least Replies</CustomButton> */}
  </div>
);
// Need On click 
export default SortPosts;