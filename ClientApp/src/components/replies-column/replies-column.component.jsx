import React from 'react';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import DiscussionPost from '../discussion-post/discussion-post.component';
import './replies-column.styles.scss';

const ReviewsColumn = ({ children, posts, ...props }) => {
  if (!props.show || (!children && !posts)) {
    return null;
  }

  const populateCol = posts => {
    {
      if (posts) {
        return (posts.map(post => (
          <DiscussionFeedItem
            user={post.authorId}
            type={post.postType}
            postWidth={props.postWidth}
            btnName={post.btnName}
            showbtn={post.isRepliable}
          >
            {post.content}
          </DiscussionFeedItem>
        )));
      }
    }
  };

  console.log('Reply Type: ', props.replyType);
  return (
    <div className='reviews-column'>
      {/* <DiscussionPost
        user='Placeholder'
        type={props.replyType}
        postWidth={props.postWidth}
      /> */}
      { children }

      {posts.map(post => (
          <DiscussionFeedItem
            user={post.authorId}
            type={post.postType}
            postWidth={props.postWidth}
            btnName={post.btnName}
            showbtn={post.isRepliable}
            time={post.time}
          >
            {post.content}
          </DiscussionFeedItem>
        ))}
    </div>
  );
};

export default ReviewsColumn;
