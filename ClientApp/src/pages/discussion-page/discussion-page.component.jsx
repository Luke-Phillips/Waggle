import React from 'react'
import Question from '../../components/question/question.component'
import ClassNav from '../../components/class-nav/class-nav.component'
import './discussion-page.styles.scss'

const DiscussionPage = () => (
    <div className='discussion-page'>
        <div>
            <ClassNav />
        </div>
        <h1> Get ready to share </h1>
        <Question />
    </div>
);

export default DiscussionPage;