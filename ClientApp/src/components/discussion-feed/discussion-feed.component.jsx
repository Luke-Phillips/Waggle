import React, { useContext ,useEffect, useState } from 'react';
import CreatePost from '../create-post/create-post.component';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import DiscussionPost from '../discussion-post/discussion-post.component';
import RepliesColumn from '../replies-column/replies-column.component';
import { UserAndClassIds } from '../user-and-class-context/user-and-class-context';
import './discussion-feed.styles.scss';


const DiscussionFeed = ({shownPostTypes, sortPostsBy, timeAscending, popularityAscending, discussionPostType, showbtn}) => {
  const {userId, classId} = useContext(UserAndClassIds);

  const [posts, setPosts] = useState([]);
  const timeSortIsFirst = sortPostsBy === 'least' || sortPostsBy === 'most';

  const [postWidth, setPostWidth] = useState('normal');
  const [replyType, setReplyType] = useState('')
  const [showReplies, setShowReplies] = useState(false);

    useEffect(() => {
    // console.log('class id is', classId);
    // classId &&
    //   fetch(`posts/${classId}`)
    //     .then(res => res.json())
    //     .then(res => setPosts(res))
    
    setPosts([
      {
        user: 'Cade',
        text: "Hello I'm a student and I would like to be heard",
        time: "2021-06-18T20:47:18", 
        postType: 'insight',
        isReply: true,
        replyPosts: [0, 0]
      },
      {
        user: 'Luke',
        text: 'I am here to Announce I am the avatar!!',
        time : "2021-06-17T20:59:26",  
        postType: 'comment',
        isReply: true,
        replyPosts: [0, 0]
      },
      {
        user: 'Michael',
        text: 'That question is very silly ask another',
        time: "2021-06-20T20:44:45",  
        postType: 'answer',
        isReply: true,
        replyPosts: [0, 0, 0, 0]
      },
      {
        user: 'Brooklynn',
        text: 'You seem very intelligent, this was very well written. Good job',
        time: "2021-06-19T20:41:41",
        postType: 'fbrequest',
        isReply: true,
        replyPosts: [0, 0, 0]
      },
    ])
  }, [classId]);

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
    setReplyType(newReplyType)
  }

  const handleReplyClick = () => {
    setShowReplies(true)
    setPostWidth('wide')
  }

  const timeCompare = isAscending => {
    return (post1, post2) => {
      if (post1.time > post2.time) return isAscending ? 1 : -1;
      if (post1.time < post2.time) return -(isAscending ? 1 : -1);
      return 0;
    };
  };

  const popularityCompare = isAscending => {
    return (post1, post2) => {
      if (post1.replyPosts.length > post2.replyPosts.length) return isAscending ? 1 : -1;
      if (post1.replyPosts.length < post2.replyPosts.length) return -(isAscending ? 1 : -1);
      return 0;
    };
  };
  
  const filteredPosts = shownPostTypes.length === 0 ?
    posts.slice() :
    posts.slice().filter(post =>
      shownPostTypes.includes(post.postType)
    );

  const sortedPosts = timeSortIsFirst
    ? filteredPosts.slice()
        .sort(timeCompare(timeAscending))
        .sort(popularityCompare(popularityAscending))
    : filteredPosts.slice()
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
            user={feedItem.user}
            type={feedItem.postType}
            postWidth={postWidth}
            onClick={() => {
              toggleShowReplies();
              handlePostWidth();
            }}
            btnFunc={handleReplyType}
            replyClick={handleReplyClick}
            time={feedItem.time}
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
        showbtn={false}
      />
    </div>
  );
};

export default DiscussionFeed;
