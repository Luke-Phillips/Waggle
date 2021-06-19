import React from 'react';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import './reviews-column.styles.scss';

const ReviewsColumn = ({data, ...props}) => {
  if (!props.show) {
    return null;
  }

  console.log('DATA: ' ,data)
  return (
    <div className='reviews-column'>
     {data.posts.map(( post )=> (
      <DiscussionFeedItem user={post.user} id={post.postType} btnName={post.btnName}>{post.text}</DiscussionFeedItem>
     ))}
      
    </div>
  );
};

export default ReviewsColumn;
