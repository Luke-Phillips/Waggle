import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './posting-as.styles.scss'

const PostingAs = props => (
  <div className='posting-as'>
    <p >{`Posting as ${props.type} as `}</p> 
    <CustomButton className='posting-as-button' value={props.user}>{props.user}</CustomButton>
    <CustomButton className='posting-as-button' value='anonymous'>Anonymous</CustomButton>
  </div>
);

export default PostingAs;