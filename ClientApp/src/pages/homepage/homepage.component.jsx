import React from 'react'
import './homepage.styles.scss'

const HomePage = () => (
    <div className='homepage'>
        <h1>Welcome to Waggle!</h1>
        <h5>Overview</h5>
        <p>
            Waggle is a peer tutoring platform for teachers and students that promotes an environment of peer
            collaboration. Waggle seeks to generate in learners a genuine interest to help their peers learn and
            grow. This method, backed by research, leverages the benefits of peer tutoring to increase the
            education of students and decrease the workload of the teacher so they can focus their efforts where
            it matters most.
        </p>
        <p>
            The Waggle app centers around a discussion page where our users, known as Wagglers, can share
            insights, ask and answer each other's questions, and request and give feedback on their course
            assignments. By teaching each other, student Wagglers reinforce their own learning and identify gaps
            in their understanding. Additionally, the ability for student Wagglers to share their insights and
            answers means their peers get to be taught from the perspective of another learner, helping to bridge
            the gaps often left by professional educators who don't remember what it's like to not know the
            material they're teaching. 
        </p>
        <h5>Why Choose Waggle?</h5>
        <p>
            Other platforms offer similar solutions to Waggle but focus exclusively on peer feedback. Waggle
            places a stronger emphasis on peer tutoring in general. Whether you're a student or a teacher, sign up
            and bring Waggle to your classroom today!
        </p>
        <h5>Some Background...</h5>
        <p>
            Where did we get our name? Waggle is a term that refers to a special "dance" done by bees! The waggle
            dance serves an important purpose for a colony of bees. The dance is performed by a bee to show its
            fellow bees where to find nectar. Likewise, in Waggle, our users are the waggling bees who lead their
            peers to the nectar of knowledge they've discovered.
        </p>
        <h5>Coming Soon</h5>
        <p>
            In future updates, we will be introducing gamification into Waggle. Wagglers will now be able to earn
            points, achievements, and badges for things like asking questions and sharing their insights. The
            reward system functions as positive reinforcement, helping further develop an instrinsic desire to
            collaborate.
        </p>
    </div>
);

export default HomePage;