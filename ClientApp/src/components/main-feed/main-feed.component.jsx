import React, { useState, useEffect, useContext } from 'react';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import NewPost from '../new-post/new-post.component';
import { UserContext } from '../user-context/user-context';

import './main-feed.styles.scss';

const MainFeed = ({
  filteredPostTypes,
  sortPostsBy,
  timeAscending,
  popularityAscending,
  discussionPostType,
  postWidth,
  handleReplyType,
  handlePostWidth,
  handleReplyClick,
  handleFocusId,
  showReplies,
  hideReplies,
  showNewPost,
  handleShowNewPost,
  handleShowNewReply,
  showbtn,
  ...props
}) => {
  const { userId, classroomId, token } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  const timeSortIsFirst = sortPostsBy === 'least' || sortPostsBy === 'most';

  const postsGetReq = () => {
    console.log('Token in New Post', token)
    classroomId &&
    fetch(`posts/${classroomId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }})
      .then(res => res.json())
      .then(res => setPosts(res));
  };

  useEffect(() => {
    postsGetReq();
  }, [classroomId]);

  const timeCompare = isAscending => {
    return (post1, post2) => {
      if (post1.time > post2.time) return isAscending ? 1 : -1;
      if (post1.time < post2.time) return -(isAscending ? 1 : -1);
      return 0;
    };
  };

  const popularityCompare = isAscending => {
    return (post1, post2) => {
      const postOneLength =
        post1.replyPosts === null ? 0 : post1.replyPosts.length;

      const postTwoLength =
        post2.replyPosts === null ? 0 : post2.replyPosts.length;

      if (postOneLength > postTwoLength) return isAscending ? 1 : -1;
      if (postOneLength < postTwoLength) return -(isAscending ? 1 : -1);
      return 0;
    };
  };

  const filteredPosts =
    filteredPostTypes.length === 0
      ? posts.slice()
      : posts.slice().filter(post => filteredPostTypes.includes(post.postType));

  const sortedPosts = timeSortIsFirst
    ? filteredPosts.slice().sort(timeCompare(timeAscending))
    : //.sort(popularityCompare(popularityAscending))
      filteredPosts
        .slice()
        //.sort(popularityCompare(popularityAscending))
        .sort(timeCompare(timeAscending));

  return (
    <div className='main-feed'>
      {showNewPost && (
        <NewPost
          user='placeholder'
          type={discussionPostType}
          postWidth={postWidth}
          getRequest={postsGetReq}
          handleShowPost={handleShowNewPost}
        />
      )}

      {sortedPosts.map(feedItem => (
        <DiscussionFeedItem
          key={feedItem.postId}
          user={feedItem.authorName}
          type={feedItem.postType}
          postWidth={postWidth}
          onClick={() => {
            handleFocusId(feedItem.postId);
            props.widePostWidth();
            showReplies();
            handleShowNewReply(false);
          }}
          onDblClick={() => {
            hideReplies();
            props.normalPostWidth();
            handleShowNewReply(false);
          }}
          btnFunc={handleReplyType}
          replyClick={() => {
            handleFocusId(feedItem.postId);
            handleShowNewReply(true);
            handleReplyClick();
            showReplies();
            
          }}
          time={feedItem.time}
        >
          {feedItem.content}
        </DiscussionFeedItem>
      ))}
    </div>
  );
};
export default MainFeed;
