import React from 'react';
import DiscussionFeedItem from '../discussion-feed-item/discussion-feed-item.component';
import RepliesColumn from '../replies-column/replies-column.component';
import './discussion-feed.styles.scss';

const DiscussionFeed = ({ postWidth, ...otherProps }) => {
  const shownPostTypes = otherProps.shownPostTypes;

  const data = {
    posts: [
      {
        user: 'Cade',
        text: "Hello I'm a student and I would like to be heard",
        postType: 'insight',
        isReply: true,
      },
      {
        user: 'Luke',
        text: 'I am here to Announce I am the avatar!!',
        postType: 'comment',
        isReply: true,
      },
      {
        user: 'Michael',
        text: 'That question is very silly ask another',
        postType: 'answer',
        isReply: true,
      },
      {
        user: 'Brooklynn',
        text: 'You seem very intelligent, this was very well written. Good job',
        postType: 'fbrequest',
        isReply: true,
      },
    ],
  };
  let filteredPosts = [];
  // Fetch needs to happen

  if (otherProps.shownPostTypes.length !== 0) {
    filteredPosts = data.posts.filter(post =>
      shownPostTypes.includes(post.postType)
    );
    console.log('Filtered Posts', filteredPosts);
  } else {
    filteredPosts = data.posts;
  }

  return (
    <div className='discussion-feed'>
      <div className='main-thread'>
        {filteredPosts.map(feedItem => (
          <DiscussionFeedItem
            user={feedItem.user}
            type={feedItem.postType}
            postWidth={postWidth}
            {...otherProps}
          >
            {feedItem.text}
          </DiscussionFeedItem>
        ))}
      </div>
      <RepliesColumn
        className='visible'
        show={otherProps.showReplies}
        data={data}
        onClick={otherProps.toggleShowReplies}
        postWidth={postWidth}
      />
    </div>
  );
};

export default DiscussionFeed;
