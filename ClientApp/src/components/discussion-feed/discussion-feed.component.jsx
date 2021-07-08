import React, { useEffect, useState } from 'react';
import CreatePost from '../create-post/create-post.component';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import DiscussionPost from '../discussion-post/discussion-post.component';
import RepliesColumn from '../replies-column/replies-column.component';
import './discussion-feed.styles.scss';


const DiscussionFeed = ({shownPostTypes, sortPostsBy, discussionPostType}) => {
  const [posts, setPosts] = useState([]);
  const popularitySortToggle = sortPostsBy === 'least' ? -1 : 1; // default = 1 = most replies
  const timeSortToggle = sortPostsBy === 'oldest' ? -1 : 1; // default = 1 = most recent
  const timeSortIsFirst = sortPostsBy === 'least' || sortPostsBy === 'most';

  const [postWidth, setPostWidth] = useState('normal');
  const [replyType, setReplyType] = useState('')
  const [showReplies, setShowReplies] = useState(false);

  useEffect(() => {
    // this will actually be a fetch
    //fetch(``)
    setPosts([
      {
        user: 'Cade',
        text: "Hello I'm a student and I would like to be heard",
        time: "2021-06-18T20:47:18",
        postType: 'insight',
        isReply: true,
        replies: [0]
      },
      {
        user: 'Luke',
        text: 'I am here to Announce I am the avatar!!',
        time : "2021-06-17T20:59:26",
        postType: 'comment',
        isReply: true,
        replies: [0, 0]
      },
      {
        user: 'Michael',
        text: 'That question is very silly ask another',
        time: "2021-06-20T20:44:45",
        postType: 'answer',
        isReply: true,
        replies: [0, 0, 0, 0]
      },
      {
        user: 'Brooklynn',
        text: 'You seem very intelligent, this was very well written. Good job',
        time: "2021-06-19T20:41:41",
        postType: 'fbrequest',
        isReply: true,
        replies: [0, 0, 0]
      },
    ])
  }, []);

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

  const handleReplyType = newReplyType => {
    console.log('Handle Reply Type Called')
    setReplyType(newReplyType)
  }

  const timeCompare = isAscending => {
    return (post1, post2) => {
      if (post1.time > post2.time) return isAscending;
      if (post1.time < post2.time) return -+isAscending;
      return 0;
    };
  };

  const popularityCompare = isAscending => {
    return (post1, post2) => {
      if (post1.replies.length > post2.replies.length) return isAscending;
      if (post1.replies.length < post2.replies.length) return -+isAscending;
    };
  };
  
  const filteredPosts = shownPostTypes.length === 0 ?
    posts.slice() :
    posts.slice().filter(post =>
      shownPostTypes.includes(post.postType)
    );

  const sortedPosts = timeSortIsFirst
    ? filteredPosts.slice()
        .sort(popularityCompare(timeSortToggle))
        .sort(timeCompare(popularitySortToggle))
    : filteredPosts.slice()
        .sort(popularityCompare(popularitySortToggle))
        .sort(timeCompare(timeSortToggle));
  
  console.log('sorted posts after sort', sortedPosts);

  return (
    <div className='discussion-feed'>
      <div className='main-thread'>
      <DiscussionPost
            user='placeholder'
            type={discussionPostType}
            postWidth={postWidth}
          />

        {sortedPosts.map(feedItem => (
          <DiscussionFeedItem
            user={feedItem.user}
            type={feedItem.postType}
            postWidth={postWidth}
            onClick={() => {
              toggleShowReplies();
              handlePostWidth();
            }}
            btnFunc={handleReplyType}
          >
            {feedItem.text}
          </DiscussionFeedItem>
        ))}
      </div>
      <RepliesColumn
        className='visible'
        show={showReplies}
        posts={posts}
        onClick={toggleShowReplies}
        postWidth={postWidth}
        replyType={replyType}
      />
    </div>
  );
};

export default DiscussionFeed;
