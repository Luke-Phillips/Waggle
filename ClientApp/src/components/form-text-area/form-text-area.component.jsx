import React from 'react'

import './form-text-area.styles.scss'

const FormTextArea = ({name}) => (
    <textarea className='text-area' placeholder={name}></textarea>
);

export default FormTextArea;