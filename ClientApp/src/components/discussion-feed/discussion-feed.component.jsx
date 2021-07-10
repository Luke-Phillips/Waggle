import React, { useContext, useEffect, useState } from 'react';
import CreatePost from '../create-post/create-post.component';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import DiscussionPost from '../discussion-post/discussion-post.component';
import RepliesColumn from '../replies-column/replies-column.component';
import { UserAndClassIds } from '../user-and-class-context/user-and-class-context';
import './discussion-feed.styles.scss';

const DiscussionFeed = ({
  filteredPostTypes,
  sortPostsBy,
  timeAscending,
  popularityAscending,
  discussionPostType,
  showbtn,
}) => {
  const { userId, classId } = useContext(UserAndClassIds);

  const [posts, setPosts] = useState([]);
  const timeSortIsFirst = sortPostsBy === 'least' || sortPostsBy === 'most';

  const [postWidth, setPostWidth] = useState('normal');
  const [replyType, setReplyType] = useState('');
  const [showRepliesCol, setShowRepliesCol] = useState(false);
  const [repliesColFeed, setRepliesColFeed] = useState([]);

  const dummyData = [
    {
      authorId: 'Cade',
      content: "Hello I'm a student and I would like to be heard",
      time: '2021-06-18T20:47:18',
      postType: 'insight',
      isRepliable: true,
      replyPosts: [0, 0],
    },
    {
      authorId: 'Luke',
      content: 'I am here to Announce I am the avatar!!',
      time: '2021-06-17T20:59:26',
      postType: 'comment',
      isRepliable: true,
      replyPosts: [0, 0],
    },
    {
      authorId: 'Michael',
      content: 'That question is very silly ask another',
      time: '2021-06-20T20:44:45',
      postType: 'answer',
      isRepliable: true,
      replyPosts: [0, 0, 0, 0],
    },
    {
      authorId: 'Brooklynn',
      content:
        'You seem very intelligent, this was very well written. Good job',
      time: '2021-06-19T20:41:41',
      postType: 'fbrequest',
      isRepliable: true,
      replyPosts: [0, 0, 0],
    },
  ];

  useEffect(() => {
    console.log('class id is', classId);
    // classId &&
    //   fetch(`posts/${classId}`)
    //     .then(res => res.json())
    //     .then(res => setPosts(res));

    setPosts(dummyData)
  }, [classId]);

  const toggleShowReplies = numReplies => {
    
    return numReplies === null ? 0 : setShowRepliesCol(!showRepliesCol);
  };

  const handlePostWidth = numReplies => {
    if(numReplies === null) return 

    if (postWidth === 'normal') {
      setPostWidth('wide');
    } else {
      setPostWidth('normal');
    }
  };

  const handleRepliesColRender = numReplies => {
    handlePostWidth(numReplies)
    toggleShowReplies(numReplies)

  }

  const handleReplyType = newReplyType => {
    setReplyType(newReplyType);
  };

  const handleReplyClick = () => {
    setShowRepliesCol(true);
    setPostWidth('wide');
  };

  const populateRepliesCol = replyPosts => {
    return replyPosts === null
      ? setRepliesColFeed([])
      : setRepliesColFeed(replyPosts);
  };

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
    ? filteredPosts
        .slice()
        .sort(timeCompare(timeAscending))
        .sort(popularityCompare(popularityAscending))
    : filteredPosts
        .slice()
        .sort(popularityCompare(popularityAscending))
        .sort(timeCompare(timeAscending));

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
            user={feedItem.authorId}
            type={feedItem.postType}
            postWidth={postWidth}
            onClick={() => {
              handleRepliesColRender(feedItem.replyPosts)
              populateRepliesCol(feedItem.replyPosts);
            }}
            btnFunc={handleReplyType}
            replyClick={() => {
              handleReplyClick();
              populateRepliesCol(feedItem.replyPosts);
            }}
            time={feedItem.time}
          >
            {feedItem.content}
          </DiscussionFeedItem>
        ))}
      </div>
      <RepliesColumn
        className='visible'
        show={showRepliesCol}
        posts={repliesColFeed}
        //onClick={toggleShowReplies}
        postWidth={postWidth}
        //replyType={replyType}
        showbtn={false}
      >
        <DiscussionPost
          user='Placeholder'
          type={replyType}
          postWidth={postWidth}
        />
      </RepliesColumn>
    </div>
  );
};

export default DiscussionFeed;
