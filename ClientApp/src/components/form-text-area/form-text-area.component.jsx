import React from 'react';

import './form-text-area.styles.scss';

const FormTextArea = ({placeholder, ...props}) => (
  <textarea className="text-area" placeholder={placeholder} {...props}></textarea>
);

export default FormTextArea;
