import React, { useState, useEffect, useContext } from 'react';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import NewPost from '../new-post/new-post.component';
import { UserContext } from '../user-context/user-context';
import './reply-feed.styles.scss';

const ReplyFeed = ({ children, focusedPostId, showNewReply, ...props }) => {
  const { userId, classroomId, token } = useContext(UserContext);
  const [replyPosts, setReplyPosts] = useState([]);

  const replyGetReq = parentPostId => {
    classroomId &&
      parentPostId &&
      fetch(`posts/${classroomId}/${parentPostId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
        .then(res => res.json())
        .then(res => setReplyPosts(res));
  };

  useEffect(() => {
    replyGetReq(focusedPostId);
    //props.handleShowNewReply(false);
  }, [focusedPostId]);

  if (!props.show) {
    return null;
  }

  // console.log('replies type ', props.type);
  return (
    <div className='reply-feed'>
      {showNewReply && (
        <NewPost
          user='placeholder'
          type={props.type}
          postWidth={props.postWidth}
          isReplyPost={true}
          currPostId={focusedPostId}
          getRequest={() => {
            replyGetReq(focusedPostId);
          }}
          handleShowPost={props.handleShowNewReply}
        />
      )}

      {/* { children } */}

      {replyPosts.map(post => {
        const replyType =
          post.postType === 'feedback' ? 'response' : post.postType;
        return (
          <DiscussionFeedItem
            key={post.postId}
            user={post.authorName} // need a username
            type={replyType}
            postWidth={props.postWidth}
            btnName={post.btnName}
            showbtn={post.isRepliable}
            time={post.time}
          >
            {post.content}
          </DiscussionFeedItem>
        );
      })}
    </div>
  );
};

export default ReplyFeed;
