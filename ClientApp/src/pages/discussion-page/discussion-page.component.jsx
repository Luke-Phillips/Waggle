import React, { useContext, useState } from 'react';
import FilterPost from '../../components/filter-posts/filter-posts.component';
import SortPosts from '../../components/sort-posts/sort-posts.component';
import CreatePost from '../../components/create-post/create-post.component';
import MainFeed from '../../components/main-feed/main-feed.component';
import ReplyFeed from '../../components/reply-feed/reply-feed.component';
import { UserContext } from '../../components/user-context/user-context';

import './discussion-page.styles.scss';

const modules = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

const DiscussionPage = () => {
  const userContext = useContext(UserContext);

  const [postInfo, setPostInfo] = useState({});

  const [sortBy, setSortBy] = useState('newest');
  const [sortByTimeAscending, setSortByTimeAscending] = useState(false); // newest posts
  const [sortByPopularityAscending, setSortByPopularityAscending] =
    useState(true); // least replies

  const [filteredPostTypes, setFilteredPostTypes] = useState([]);

  const [postWidth, setPostWidth] = useState('normal');
  const [replyType, setReplyType] = useState('');
  const [showRepliesFeed, setShowRepliesFeed] = useState(false);
  const [focusedPostId, setFocusedPostId] = useState(0);
  const [showNewPost, setShowNewPost] = useState(false);
  const [showNewReply, setShowNewReply] = useState(false);

  const handleShowNewPost = newValue => {
    setShowNewPost(newValue);
  };

  const handleShowNewReply = newValue => {
    setShowNewReply(newValue);
  };

  const handleFilterPostTypes = e => {
    const postType = e.target.value;
    const isFiltered = e.target.checked;

    const newFilteredPostTypes = isFiltered
      ? [postType, ...filteredPostTypes]
      : filteredPostTypes.filter(pt => pt !== postType);
    setFilteredPostTypes(newFilteredPostTypes);
  };

  const handleSortBy = sortBy => {
    setSortBy(sortBy);
    if (sortBy === 'newest' || sortBy === 'oldest') {
      setSortByTimeAscending(sortBy === 'oldest');
    } else {
      setSortByPopularityAscending(sortBy === 'least');
    }
  };

  const handleFocusId = newFocusId => {
    setFocusedPostId(newFocusId);
  };

  const normalPostWidth = () => {
    setPostWidth('normal');
  };

  const widePostWidth = () => {
    setPostWidth('wide');
  };

  const handleReplyType = newReplyType => {
    setReplyType(newReplyType);
  };

  const handleReplyClick = () => {
    setShowRepliesFeed(true);
    setPostWidth('wide');
  };

  const showReplies = () => {
    setShowRepliesFeed(true)
  };

  const hideReplies = () => {
    setShowRepliesFeed(false);
  };

  const announcement = () => {
    setPostInfo({
      postType: 'announcement',
    });
  };

  const question = () => {
    setPostInfo({
      postType: 'question',
    });
  };

  const insight = () => {
    setPostInfo({
      postType: 'insight',
    });
  };

  const feedback = () => {
    setPostInfo({
      postType: 'feedback',
    });
  };

  const postTypes = [announcement, question, insight, feedback];

  return ( !userContext.classroomId ?
    <p>Create or join a class before contributing to a discussion</p> :
    userContext.enrollmentStatus !== 'enrolled' ?
    <p>Your enrollment is pending</p> :
    <div className='discussion-page'>
      <div className='discussion-board'>
        <div className='options'>
          <FilterPost handleCheckFilter={handleFilterPostTypes} />
          <CreatePost
            isMod={userContext.isModerator}
            postTypes={postTypes}
            showbtn={true}
            handleShowNewPost={handleShowNewPost}
          />
        </div>
        <div className='post-feed'>
          <SortPosts setSortByValue={handleSortBy} showbtn={true} />
          <div className='feed-columns'>
            <MainFeed
              filteredPostTypes={filteredPostTypes}
              sortPostsBy={sortBy}
              timeAscending={sortByTimeAscending}
              popularityAscending={sortByPopularityAscending}
              discussionPostType={postInfo.postType}
              showbtn={true}
              postWidth={postWidth}
              handleReplyType={handleReplyType}
              handleReplyClick={handleReplyClick}
              widePostWidth={widePostWidth}
              normalPostWidth={normalPostWidth}
              handleFocusId={handleFocusId}
              hideReplies={hideReplies}
              showReplies={showReplies}
              showNewPost={showNewPost}
              handleShowNewPost={handleShowNewPost}
              handleShowNewReply={handleShowNewReply}
            />

            <ReplyFeed
              className='visible'
              show={showRepliesFeed}
              postWidth={postWidth}
              showbtn={false}
              type={replyType}
              focusedPostId={focusedPostId}
              showNewReply={showNewReply}
              handleShowNewReply={handleShowNewReply}
            >
              {/* <DiscussionPost
          user='Placeholder'
          isReplyPost={true}
          postWidth={postWidth}
          type={replyType}
          currPostId={focusedPostId}
          postsGetReq={postsGetReq}
        /> */}
            </ReplyFeed>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;
