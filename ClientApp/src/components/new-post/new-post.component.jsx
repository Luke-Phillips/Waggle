import React, { useState, useEffect, useContext } from 'react';
import PostHeader from '../post-header/post-header.component';
import PostingAs from '../posting-as/posting-as.component';
import FormTextArea from '../form-text-area/form-text-area.component';
import CustomButton from '../custom-button/custom-button.component';
import { UserContext } from '../user-context/user-context';

import './new-post.styles.scss';

const NewPost = ({isReplyPost = false, ...props }) => {
  const { token, userId, classroomId } = useContext(UserContext);
  const [userText, setUserText] = useState('');

  if (!props.type) {
    return null;
  }

  const handleFeebackType = type => {
    if (type === 'feedback') {
      return 'feedback request';
    }
    return type;
  };

  const handleIsReplyPost = (isReplyPost, replyToPostId) => {
    return isReplyPost ? replyToPostId : null;
  };

  //console.log('Reply type', props.type);

  const sendPost = () => {
    const replyToPostId = handleIsReplyPost(isReplyPost, props.currPostId);
    console.log('send post type: ', props.type)
    let postData = {
      classroomId: classroomId, // context ClassId
      replyToPostId: replyToPostId,
      postType: props.type,
      authorId: userId, // = context userId
      content: userText,
      time: new Date(),
      file: null,
    };
    const content = userText ? userText.trim() : ''

    if(content.length > 0){
    fetch('posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(postData),
    })
    .then(props.getRequest);
  }};

  const handleTextChange = e => {
    setUserText(e.target.value); // LOoke up react SpRiNg write this somewhere else
  };

  return (
    <div className={`discussion-post ${props.postWidth}`}>
      <PostingAs
        className='posting-as'
        user={props.user}
        type={handleFeebackType(props.type)}
      />
      <FormTextArea
        className='enter-text'
        placeholder='Enter text here...'
        onChange={handleTextChange}
      />
      <CustomButton
        className='post-button'
        showbtn={props.showbtn}
        onClick={() => {
          sendPost();
          props.handleShowPost(false)
        }}
      >
        Post
      </CustomButton>
    </div>
  );
};

export default NewPost;

// "postId": 1,
//         "postType": "question",
//         "authorId": null,
//         "time": "2021-06-17T20:47:18",
//         "content": "What is a question post?",
//         "isRepliable": false,
//         "file": null,
//         "replyPosts": [
//             {
//                 "postId": 3,
//                 "postType": "answer",
//                 "authorId": null,
//                 "time": "2021-06-17T20:59:26",
//                 "content": "I don't know, but this is an answer post.",
//                 "isRepliable": false,
//                 "file": null,
//                 "ratings": null
//             }
//         ],
//         "ratings": []

// Some might say apprentice since he is still in his internship. How can we really justify adept? A certain number of projects, or error messages, or hour spent programming? Spells learned perhaps.
