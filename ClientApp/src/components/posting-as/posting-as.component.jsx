import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './posting-as.styles.scss'

const PostingAs = props => (
  <div className='posting-as'>
    <p>{`Posting ${props.type} as ${props.user}`}</p> 
    
  </div>
);

export default PostingAs;