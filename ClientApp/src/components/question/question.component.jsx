import React from 'react'
import FormTextArea from '../form-text-area/form-text-area.component'
import './question.styles.scss'

const Question = () => (
    <div className='question'>
        <p className='text'></p>
        <form>
            <FormTextArea name='Type Question Here'></FormTextArea>
        </form>
    </div>
);

export default Question; 