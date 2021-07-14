import React, {useState, useEffect }from 'react';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import DiscussionPost from '../discussion-post/discussion-post.component';
import './replies-column.styles.scss';


const RepliesColumn = ({ children, posts, ...props }) => {
  // useEffect(()=>{}, [posts])
  const [replyPosts, setReplyPosts] = useState(posts)

  useEffect(()=>{
    setReplyPosts(posts)
  }, [posts])
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

  console.log('replies type ',props.type)
  return (
    <div className='reviews-column'>
      
      <DiscussionPost
          user='Placeholder'
          type={props.type}
          postWidth={props.postWidth}
          isReplyPost={true}
          currPostId={props.currPostId}
          postsGetReq={props.postsGetReq}
        />

      {/* { children } */}

      {replyPosts.map(post => (
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
