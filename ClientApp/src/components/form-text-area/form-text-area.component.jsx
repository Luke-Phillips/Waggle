import React from 'react';

import './form-text-area.styles.scss';

const FormTextArea = ({placeholder, ...props}) => (
  <textarea placeholder={placeholder} {...props}></textarea>
);

export default FormTextArea;
