import React, { useEffect }from 'react';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import DiscussionPost from '../discussion-post/discussion-post.component';
import './replies-column.styles.scss';


const RepliesColumn = ({ children, posts, ...props }) => {
  useEffect(()=>{console.log('Props.GetPosts: ', props.getPosts)}, [props.getPosts])
  
  if (!props.show ) {
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

  
  return (
    <div className='reviews-column'>
      
      { children }

      {posts.map(post => (
          <DiscussionFeedItem
            key={post.postId}
            user={post.authorId} // need a username
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

export default RepliesColumn;
