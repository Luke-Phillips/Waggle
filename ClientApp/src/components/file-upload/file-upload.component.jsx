import React from 'react';

import './file-upload.style.scss'

const FileUpload = props => {
  if (props.allowUpload !== 'respond' || props.allowUpload !== 'feedback') {
    return null;
  }

  return <input className='upload' type='file' />;
};

export default FileUpload;
