import React, { useState } from 'react';
import CreatePost from '../create-post/create-post.component';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import DiscussionPost from '../discussion-post/discussion-post.component';
import RepliesColumn from '../replies-column/replies-column.component';
import './discussion-feed.styles.scss';

const DiscussionFeed = (props) => {
  const [whenPostedToggle, setWhenPostedToggle] = useState(1); // 1 = most recent
  const [numResponsesToggle, setNumResponsesToggle] = useState(1); // 1 = most replies
  const [showReplies, setShowReplies] = useState(false);
  const [postWidth, setPostWidth] = useState('normal');

  const shownPostTypes = props.shownPostTypes;
  const sortPostsBy = props.sortPostsBy;
  let filteredPosts = [];
  const data = {
    posts: [
      {
        user: 'Cade',
        text: "Hello I'm a student and I would like to be heard",
        time: "2021-06-17T20:47:18",
        postType: 'insight',
        isReply: true,
      },
      {
        user: 'Luke',
        text: 'I am here to Announce I am the avatar!!',
        time : "2021-06-17T20:59:26",
        postType: 'comment',
        isReply: true,
      },
      {
        user: 'Michael',
        text: 'That question is very silly ask another',
        time: "2021-06-17T20:44:45",
        postType: 'answer',
        isReply: true,
      },
      {
        user: 'Brooklynn',
        text: 'You seem very intelligent, this was very well written. Good job',
        time: "2021-06-17T20:41:41",
        postType: 'fbrequest',
        isReply: true,
      },
    ],
  };


  const toggleShowReplies = () => {
    setShowReplies(!showReplies);
  };

  const handlePostWidth = () => {
    if (postWidth === 'normal') {
      setPostWidth('wide');
    } else {
      setPostWidth('normal');
    }
  };

  const whenPostedHandler = sortBy => {
    console.log('When Posted called');
    if (sortBy === 'oldest') {
      // console.log('Case oldest')
      // setWhenPostedToggle(-1);
      return -1
    }
    if (sortBy === 'newest') {
      // console.log('Case newest')
      // setWhenPostedToggle(1);
      return 1
    }
  };

  const numResponsesHandler = sortBy => {
    console.log('Num Responses called');
    if (sortBy === 'least') {
      setNumResponsesToggle(-1);
    } 
    if (sortBy === 'most') {
      setNumResponsesToggle(1);
    }
  };

  const whenPostedCompare = isAscending => {
    return (post1, post2) => {
      if (post1.time > post2.time) return isAscending;
      if (post1.time < post2.time) return -+isAscending;
      return 0;
    };
  };

  const numResponsesCompare = isAscending => {
    return (post1, post2) => {
      if (post1.replies.length > post2.replies.length) return isAscending;
      if (post1.replies.length < post2.replies.length) return -+isAscending;
    };
  };

  const sortDiscussionFeed = sortPostsBy => {

    if (sortPostsBy === 'oldest' || sortPostsBy === 'newest') {
      setWhenPostedToggle(whenPostedHandler(sortPostsBy));
      filteredPosts.sort(whenPostedCompare(whenPostedToggle));
    } 
    if (sortPostsBy === 'most' || sortPostsBy === 'least') {
      numResponsesHandler(sortPostsBy);
      filteredPosts.sort(numResponsesCompare(numResponsesToggle));
    }
    else {
      return
    }
  };

  if (props.shownPostTypes.length !== 0) {
    filteredPosts = data.posts.filter(post =>
      shownPostTypes.includes(post.postType)
    );
    console.log('Filtered Posts', filteredPosts);
  } else {
    filteredPosts = data.posts;
  }

  if (sortPostsBy !== '') {
    sortDiscussionFeed(sortPostsBy);
  }
  
  return (
    <div className='discussion-feed'>
      <div className='main-thread'>
      <DiscussionPost
            user='placeholder'
            type={props.discussionPostType}
            postWidth={postWidth}
          />

        {filteredPosts.map(feedItem => (
          <DiscussionFeedItem
            user={feedItem.user}
            type={feedItem.postType}
            postWidth={postWidth}
            onClick={() => {
              toggleShowReplies();
              handlePostWidth();
            }}
          >
            {feedItem.text}
          </DiscussionFeedItem>
        ))}
      </div>
      <RepliesColumn
        className='visible'
        show={showReplies}
        data={data}
        onClick={toggleShowReplies}
        postWidth={postWidth}
      />
    </div>
  );
};

export default DiscussionFeed;
