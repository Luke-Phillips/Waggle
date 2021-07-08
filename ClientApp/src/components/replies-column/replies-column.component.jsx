import React from 'react';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import DiscussionPost from '../discussion-post/discussion-post.component';
import './replies-column.styles.scss';

const ReviewsColumn = ({ data, ...props }) => {
  if (!props.show) {
    return null;
  }
  

  console.log('Reply Type: ', props.replyType)
  return (
    <div className='reviews-column'>
      <DiscussionPost user='Placeholder' type={props.replyType} postWidth={props.postWidth} showbtn={true}/>

      {data.posts.map(post => (
        <DiscussionFeedItem
          user={post.user}
          type={post.postType}
          postWidth={props.postWidth}
          btnName={post.btnName}
          isReply={post.isReply}
          showbtn={props.showbtn}
        >
          {post.text}
        </DiscussionFeedItem>
      ))}
    </div>
  );
};

export default ReviewsColumn;
