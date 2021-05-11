import React from 'react';

import './form-text-area.styles.scss';

const FormTextArea = props => (
  <textarea className="text-area" placeholder={props.placeholder}></textarea>
);

export default FormTextArea;
