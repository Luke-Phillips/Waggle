import React, { useState } from 'react';
import UseState from 'react';
import './filter-posts.styles.scss';

const FilterPosts = ({ handleCheckFilter }) => {
  const [announcement, setAnnouncement] = useState('');
  const [question, setQuestion] = useState('');
  const [insight, setInsight] = useState('');
  const [feedback, setFeedback] = useState('');
  const [comment, setComment] = useState('');

  const toggleAnnouncementStyle = checked => {
    const isChecked = checked === '' ? 'checked' : '';
    setAnnouncement(isChecked);
  };
  const toggleQuestionStyle = checked => {
    const isChecked = checked === '' ? 'checked' : '';
    setQuestion(isChecked);
  };
  const toggleInsightStyle = checked => {
    const isChecked = checked === '' ? 'checked' : '';
    setInsight(isChecked);
  };
  const toggleFeedbackStyle = checked => {
    const isChecked = checked === '' ? 'checked' : '';
    setFeedback(isChecked);
  };
  const toggleCommentStyle = checked => {
    const isChecked = checked === '' ? 'checked' : '';
    setComment(isChecked);
  };
  return (
    <>
      <form className='filter'>
        <h3>Filter Posts: </h3>
        <label className={`checkbox ${announcement}`}>
          <input
            type='checkbox'
            name='announcements'
            value='announcement'
            onChange={e => {
              handleCheckFilter(e);
              toggleAnnouncementStyle(announcement);
            }}
          ></input>
          Announcements
        </label>

        <label className={`checkbox ${question}`}>
          <input
            type='checkbox'
            value='question'
            onChange={e => {
              handleCheckFilter(e);
              toggleQuestionStyle(question);
            }}
          ></input>
          Questions
        </label>

        <label className={`checkbox ${insight}`}>
          <input
            type='checkbox'
            value='insight'
            onChange={e => {
              handleCheckFilter(e);
              toggleInsightStyle(insight);
            }}
          ></input>
          Insights
        </label>

        <label className={`checkbox ${feedback}`}>
          <input
            type='checkbox'
            value='fbrequest'
            onChange={e => {
              handleCheckFilter(e);
              toggleFeedbackStyle(feedback);
            }}
          ></input>
          Feedback Requests
        </label>

        <label className={`checkbox ${comment}`}>
          <input
            type='checkbox'
            value='comment'
            onChange={e => {
              handleCheckFilter(e);
              toggleCommentStyle(comment);
            }}
          ></input>
          Comments
        </label>
      </form>
    </>
  );
};

export default FilterPosts;
